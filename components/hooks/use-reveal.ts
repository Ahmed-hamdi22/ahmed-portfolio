"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
export function useReveal<T extends HTMLElement>(delay = 0, direction: "up" | "left" | "right" = "up") {
  const ref = useRef<T>(null);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (reducedMotion) { element.dataset.revealed = "true"; return; }
    const observer = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      observer.unobserve(element);
      if (element.dataset.revealed === "true") return;
      element.dataset.revealed = "true";
      const from = window.matchMedia("(max-width: 560px)").matches ? "0 16px" : direction === "left" ? "-42px 0" : direction === "right" ? "42px 0" : "0 16px";
      element.animate?.([{ opacity: 0, translate: from }, { opacity: 1, translate: "0 0" }], { duration: direction === "up" ? 550 : 620, delay: delay * 1000, easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" });
    }, { threshold: .08, rootMargin: "0px 0px -24px 0px" });
    observer.observe(element); return () => observer.disconnect();
  }, [delay, direction, reducedMotion]);
  return ref;
}
