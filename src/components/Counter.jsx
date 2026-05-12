import { useState, useEffect, useRef } from "react";
import { useInView, motion, useSpring, useTransform } from "motion/react";

export default function Counter({ value, duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Parse numeric value and suffix (e.g. "200+" -> { num: 200, suffix: "+" })
  const match = value.match(/([\d.,]+)(.*)/);
  const numericPart = match ? parseFloat(match[1].replace(/,/g, "")) : 0;
  const suffix = match ? match[2] : "";

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) => {
    const hasDecimal = value.includes(".");
    const decimalPlaces = hasDecimal
      ? value.split(".")[1].match(/\d+/)?.[0].length || 0
      : 0;
    const formatted = current.toLocaleString(undefined, {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    });
    return formatted + suffix;
  });

  useEffect(() => {
    if (isInView) {
      spring.set(numericPart);
    }
  }, [isInView, spring, numericPart]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
