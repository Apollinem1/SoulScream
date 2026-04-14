import { useState, useEffect } from "react";

export default function useLightbox(totalItems) {
  const [index, setIndex] = useState(-1);

  const open = (i) => setIndex(i);
  const close = () => setIndex(-1);
  const prev = () => setIndex((i) => (i - 1 + totalItems) % totalItems);
  const next = () => setIndex((i) => (i + 1) % totalItems);

  useEffect(() => {
    if (index < 0) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, totalItems]);

  return { index, open, close, prev, next, isOpen: index >= 0 };
}
