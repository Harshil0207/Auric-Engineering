import { useState, useEffect, useRef } from "react";

/**
 * Custom hook for hiding/showing navbar on scroll
 */
export const useScrollVisibility = (threshold = 100) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const hideTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);

      if (currentScrollY > lastScrollY && currentScrollY > threshold) {
        hideTimeoutRef.current = setTimeout(() => setIsVisible(false), 150);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [lastScrollY, threshold]);

  return { isVisible, isScrolled };
};
