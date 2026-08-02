"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  startTransition,
} from "react";

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Staggers child reveals (60–100ms). Children should accept className / data attrs.
 */
export default function StaggerGroup({
  as: Tag = "div",
  children,
  className = "",
  stagger = 70,
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
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const items = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return child;

    const delay = visible ? index * stagger : 0;
    const mergedClass = [child.props.className, "stagger-item"]
      .filter(Boolean)
      .join(" ");

    return cloneElement(child, {
      className: mergedClass,
      "data-ready": ready ? "true" : undefined,
      "data-visible": visible ? "true" : undefined,
      style: {
        ...(child.props.style || {}),
        transitionDelay: `${delay}ms`,
      },
    });
  });

  return (
    <Tag ref={ref} className={className} {...props}>
      {items}
    </Tag>
  );
}
