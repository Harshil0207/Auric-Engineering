import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If there's a hash, try to scroll to the element; otherwise scroll to top
        if (hash) {
            // slight delay to allow elements to render
            setTimeout(() => {
                const el = document.querySelector(hash);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    return;
                }
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }, 50);
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;