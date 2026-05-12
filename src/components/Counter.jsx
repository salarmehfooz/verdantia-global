import { useEffect, useRef } from "react";
import { useInView, motion, useSpring, useTransform } from "motion/react";

export default function Counter({ value, duration = 2 }) {
  const ref = useRef(null);

  // FIX 1: remove negative margin (mobile-safe)
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const match = value.match(/([\d.,]+)(.*)/);
  const numericPart = match ? parseFloat(match[1].replace(/,/g, "")) : 0;
  const suffix = match ? match[2] : "";

  // FIX 2: proper spring config
  const spring = useSpring(0, {
    stiffness: 100,
    damping: 20,
  });

  const display = useTransform(spring, (current) => {
    const hasDecimal = value.includes(".");
    const decimalPlaces = hasDecimal ? value.split(".")[1]?.length || 0 : 0;

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
