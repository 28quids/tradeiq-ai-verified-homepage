
import { useEffect, useState, useRef } from "react";

interface IntersectionObserverOptions {
  root?: null | Element;
  rootMargin?: string;
  threshold?: number | number[];
}

export function useIntersectionObserver(
  options: IntersectionObserverOptions = {},
  once = true
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);

  const { root = null, rootMargin = "0px", threshold = 0.1 } = options;

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);

        // Unobserve after first intersection if once is true
        if (entry.isIntersecting && once) {
          observer.unobserve(target);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [root, rootMargin, threshold, once]);

  return { targetRef, isIntersecting };
}
