/**
 * Simple in-memory rate limiter for serverless-friendly form protection.
 * Note: resets when the serverless instance recycles, suitable as a basic safeguard.
 */

const hits = new Map();

export function rateLimit(key, { limit = 5, windowMs = 15 * 60 * 1000 } = {}) {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1 };
  }

  if (entry.count >= limit) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterMs: entry.resetAt - now,
    };
  }

  entry.count += 1;
  hits.set(key, entry);
  return { allowed: true, remaining: limit - entry.count };
}
