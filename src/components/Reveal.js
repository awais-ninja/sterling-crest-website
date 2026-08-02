"use client";

import { useEffect, useRef, useState, startTransition } from "react";

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Lightweight scroll reveal. Content stays visible without JS.
 * After mount (when motion is allowed), fades/slides in once when in view.
 */
export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  ...props
}) {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (prefersReducedMotion()) {
      startTransition(() => {
        setVisible(true);
      });
      return undefined;
    }

    startTransition(() => {
      setReady(true);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        startTransition(() => {
          setVisible(true);
        });
        observer.disconnect();
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      data-ready={ready ? "true" : undefined}
      data-visible={visible ? "true" : undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}
