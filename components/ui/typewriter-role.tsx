"use client";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
const roles = [
  "Software Engineer",
  "Frontend Developer",
  "Full Stack Developer",
  "MERN Stack Developer",
];
export function TypewriterRole() {
  const reducedMotion = useReducedMotion();
  const [text, setText] = useState(roles[0]);
  useEffect(() => {
    if (reducedMotion) {
      setText(roles[0]);
      return;
    }
    let roleIndex = 0,
      count = roles[0].length,
      deleting = true;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      if (document.hidden) {
        timer = setTimeout(tick, 400);
        return;
      }
      const role = roles[roleIndex];
      count += deleting ? -1 : 1;
      setText(role.slice(0, count));
      let delay = deleting ? 40 : 75;
      if (deleting && count === 0) {
        roleIndex = (roleIndex + 1) % roles.length;
        deleting = false;
        delay = 300;
      } else if (!deleting && count === role.length) {
        deleting = true;
        delay = 2600;
      }
      timer = setTimeout(tick, delay);
    };
    setText(roles[0]);
    timer = setTimeout(tick, 2600);
    return () => clearTimeout(timer);
  }, [reducedMotion]);
  return (
    <p className="role" dir="ltr">
      <span className="sr-only">{roles.join(", ")}</span>
      <span className="role-text" aria-hidden="true">
        {text}
      </span>
      <span className="typing-cursor" aria-hidden="true">
        |
      </span>
    </p>
  );
}
