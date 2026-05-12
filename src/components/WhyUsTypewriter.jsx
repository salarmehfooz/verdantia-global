import { useEffect, useState } from "react";

const phrases = [
  "Why Organizations Trust Verdantia",
  "Practical Sustainability Solutions",
  "Long-Term Impact & ESG Strategy",
  "Sustainability Built For Action",
];

export default function WhyUsTypewriter() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= phrases.length) {
      setIndex(0);
      return;
    }

    const current = phrases[index];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.substring(0, subIndex + 1));
          setSubIndex((prev) => prev + 1);

          if (subIndex === current.length) {
            setTimeout(() => {
              setDeleting(true);
            }, 1800);
          }
        } else {
          setText(current.substring(0, subIndex - 1));
          setSubIndex((prev) => prev - 1);

          if (subIndex === 0) {
            setDeleting(false);
            setIndex((prev) => prev + 1);
          }
        }
      },
      deleting ? 35 : 65,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <div className="flex items-center">
      <span>{text}</span>

      <span className="ml-1 h-4 w-[2px] bg-forest-light animate-pulse rounded-full" />
    </div>
  );
}
