import { useEffect, useCallback } from "react";

export default function useSpotlight() {
  const handleMouseMove = useCallback((e) => {
    const spotlight = document.getElementById("spotlight");
    if (spotlight) {
      spotlight.style.left = e.clientX + "px";
      spotlight.style.top = e.clientY + "px";
    }

    const secret = document.querySelector(".secret-code");
    if (secret) {
      const rect = secret.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
      const radius = 250;
      const opacity = Math.max(0, 1 - dist / radius);
      secret.style.opacity = opacity;
      if (opacity > 0.85 && !secret.classList.contains("found")) {
        secret.classList.add("found");
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);
}
