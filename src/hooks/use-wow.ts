import { useEffect, useRef } from "react";

/**
 * Aiera-style WOW scroll-reveal hook.
 * Observes children with class "wow" and adds "animated" + the animation class when visible.
 */
export function useWow(threshold = 0.12) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const animClass = el.dataset.wow || "fadeInUp";
            const delay = el.dataset.wowDelay || "0s";
            const duration = el.dataset.wowDuration || "0.8s";

            el.style.animationDelay = delay;
            el.style.animationDuration = duration;
            el.classList.add("animated", animClass);
            observer.unobserve(el);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    const wowElements = container.querySelectorAll(".wow");
    wowElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return containerRef;
}
