import { useState, useEffect, useRef } from "react";

export default function useActiveSection(navItems) {
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef(null);
  const pillRef = useRef(null);

  useEffect(() => {
    const ids = navItems.map((i) => i.href.slice(1));

    const getActive = () => {
      const scrollY = window.scrollY;
      const viewH = window.innerHeight;
      const docH = document.documentElement.scrollHeight;
      if (scrollY + viewH >= docH - 10) return ids[ids.length - 1];

      const anchor = viewH * 0.35;
      let best = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= anchor) best = id;
      }
      return best;
    };

    const onScroll = () => {
      const id = getActive();
      if (id) setActiveSection("#" + id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [navItems]);

  useEffect(() => {
    const pill = pillRef.current;
    const nav = navRef.current;
    if (!pill || !nav || !activeSection) {
      if (pill) pill.style.opacity = "0";
      return;
    }
    const link = nav.querySelector(`a[href="${activeSection}"]`);
    if (!link) { pill.style.opacity = "0"; return; }
    const navRect = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    pill.style.opacity = "1";
    pill.style.width = linkRect.width + "px";
    pill.style.transform = `translateX(${linkRect.left - navRect.left}px)`;
  }, [activeSection]);

  return { activeSection, navRef, pillRef };
}
