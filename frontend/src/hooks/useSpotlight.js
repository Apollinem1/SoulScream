import { useEffect, useRef, useCallback } from "react";

export default function useSpotlight() {
  const spotlightEl = useRef(null);
  const secretEl = useRef(null);

  useEffect(() => {
    spotlightEl.current = document.getElementById("spotlight");
    secretEl.current = document.querySelector(".secret-code");
  }, []);

  const handleMouseMove = useCallback((e) => {
    const spotlight = spotlightEl.current;
    if (spotlight) {
      spotlight.style.left = `${e.clientX}px`;
      spotlight.style.top = `${e.clientY}px`;
    }

    let secret = secretEl.current;
    if (!secret) {
      secret = document.querySelector(".secret-code");
      secretEl.current = secret;
    }
    if (secret) {
      const rect = secret.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
      const radius = 250;
      const opacity = Math.max(0, 1 - dist / radius);
      secret.style.opacity = String(opacity);
      if (opacity > 0.85 && !secret.classList.contains("found")) {
        secret.classList.add("found");
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);
}
