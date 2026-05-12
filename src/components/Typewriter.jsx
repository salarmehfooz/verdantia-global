import { useState, useEffect } from "react";

const PHRASES = [
  "Sustainability · Climate · Equity · Reporting",
  "Net-Zero Strategy · ESG Disclosure",
  "Gender Equity · Health · Governance",
  "Transforming Business for a Better World",
];

export default function Typewriter() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = PHRASES[phraseIdx];

    let timeout;

    if (!isDeleting) {
      if (charIdx < currentPhrase.length) {
        timeout = setTimeout(() => {
          setCharIdx((c) => c + 1);
        }, 60);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1500); // pause at end
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setCharIdx((c) => c - 1);
        }, 35);
      } else {
        setIsDeleting(false);
        setPhraseIdx((p) => (p + 1) % PHRASES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, phraseIdx]);

  return (
    <span className="flex items-center">
      {/* prevents any accidental flash */}
      {PHRASES[phraseIdx].substring(0, charIdx)}

      <span className="inline-block w-0.5 h-[0.9em] bg-ocean-mid ml-0.5 animate-pulse" />
    </span>
  );
}
