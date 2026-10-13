"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function  FadeUp({ children, delay = 0, className, style }: FadeUpProps) {
  const reduceMotion = useReducedMotion();
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = element.current;
    if (!node || reduceMotion) return;
    const observer = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      observer.unobserve(node);
      node.animate?.([{ opacity: 0, translate: "0 16px" }, { opacity: 1, translate: "0 0" }], { duration: 550, delay: delay * 1000, easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" });
    }, { threshold: .08, rootMargin: "0px 0px -24px 0px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay, reduceMotion]);
  return (
    <div ref={element}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
}

export function StaggerContainer({ children, className, style }: {
  children: ReactNode; className?: string; style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, style }: {
  children: ReactNode; className?: string; style?: React.CSSProperties;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
