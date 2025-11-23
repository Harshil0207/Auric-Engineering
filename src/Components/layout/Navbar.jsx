import React, { memo, useState, useCallback, useMemo, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../../src/assets/Logo.png";

const Navbar = memo(() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [bodyBgDark, setBodyBgDark] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // determine if page background is dark (so we can invert nav text color)
  useEffect(() => {
    const computeBgDark = () => {
      try {
        const bg = getComputedStyle(document.body).backgroundColor;
        const dark = isRgbDark(bg);
        setBodyBgDark(dark);
      } catch {
        setBodyBgDark(false);
      }
    };

    computeBgDark();
    // recompute when route changes (pages may have different backgrounds)
    // small delay to allow page styles to apply
    const t = setTimeout(computeBgDark, 60);
    return () => clearTimeout(t);
  }, [location.pathname]);

  // helper: parse rgb/rgba string and compute luminance -> dark if < 0.5
  const isRgbDark = (rgbString) => {
    if (!rgbString) return false;
    const m = rgbString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
    if (!m) return false;
    const r = Number(m[1]) / 255;
    const g = Number(m[2]) / 255;
    const b = Number(m[3]) / 255;
    const lum = 0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b);
    return lum < 0.5;
  };

  const srgb = (c) => {
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };

  const handleNavigation = useCallback((path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [navigate]);

  const toggleDropdown = useCallback((idx) => {
    setOpenDropdown(prev => prev === idx ? null : idx);
  }, []);

  // NOTE: useLightText should reflect actual background darkness.
  // Previously `isScrolled` implied dark nav bg; now nav stays light and gets blurred on scroll.
  // Keep text light only when page/body background is dark.
  const useLightText = bodyBgDark;

  // text class helpers
  const desktopTextBase = useLightText
    ? "text-neutral-800 hover:text-black"
    : "text-gray-700 hover:text-gray-900";
  const mobileTextBase = useLightText ? "text-black" : "text-gray-900";

  const navLinks = useMemo(() => [
    { path: "/", label: "Home" },
    { path: "/aboutus", label: "About Us" },
    { path: "/manufacture", label: "Manufacture" },
    {
      label: "Products",
      dropdown: [
        {
          label: "Flanges",
          items: [
            { path: "/products/slip-on", label: "Slip-On Flanges" },
            { path: "/products/weld-neck", label: "Weld Neck Flanges" },
            { path: "/products/blind", label: "Blind Flanges" },
            { path: "/products/socket-weld", label: "Socket Weld Flanges" },
            { path: "/products/threaded", label: "Threaded Flanges" },
            { path: "/products/reducing", label: "Reducing Flanges" },
            { path: "/products/lap-joint", label: "Lap-Joint Flanges" },
            { path: "/products/plate", label: "Plate Flanges" },
            { path: "/products/rf-rij", label: "RF & RIJ Flanges" },
            { path: "/products/long-weld", label: "Long Welding Neck Flanges" },
          ]
        },
        {
          label: "Forged Fittings",
          items: [
            { path: "/products/forged-fitting", label: "Forged Fitting" },
          ]
        }
      ]
    },
    { path: "/quality-control", label: "Quality Control" },
    { path: "/manufacturing-capacity", label: "Manufacturing Capacity" },
    { path: "/contact-us", label: "Contact" },
  ], []);

  const renderDropdownContent = useCallback((dropdown) => {
    if (!Array.isArray(dropdown) || dropdown.length === 0) return null;

    const isCategory = !!dropdown[0] && Array.isArray(dropdown[0].items);

    if (isCategory) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {dropdown.map((category, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="font-bold text-cyan-600 text-sm uppercase tracking-wider border-b border-cyan-600/20 pb-2">
                {category.label}
              </h3>
              <ul className="space-y-1">
                {Array.isArray(category.items) &&
                  category.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <button
                        onClick={() => handleNavigation(item.path)}
                        className={`w-full text-left px-4 py-2.5 text-sm rounded-lg transition-all duration-300
                          hover:translate-x-1 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-transparent
                           ${useLightText ? 'text-neutral-900 hover:text-black' : 'text-gray-700 hover:text-gray-900'}`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="p-3">
        {dropdown.map((item, idx) => (
          <button
            key={item.path || idx}
            onClick={() => handleNavigation(item.path)}
            className={`w-full text-left px-4 py-2.5 text-sm rounded-lg transition-all duration-300
              hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-transparent ${useLightText ? 'text-neutral-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
          >
            {item.label}
          </button>
        ))}
      </div>
    );
  }, [handleNavigation, useLightText]);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          // default: light background (no blur). on scroll: apply stronger white bg + blur + shadow
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200"
            : "bg-white/70"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
            {/* Logo with Animated Text (replaced with responsive image + text) */}
            <button
              type="button"
              onClick={() => handleNavigation("/")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleNavigation("/"); }}
              aria-label="Go to homepage"
              className="group relative flex items-center gap-3 focus:outline-none cursor-pointer"
            >
              <img
                src={Logo}
                alt="Auric Engineering"
                className="w-30 h-30 sm:w-32 sm:h-32 md:w-44 md:h-44 object-contain"
              />

            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, idx) => (
                <div key={idx} className="relative">
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(idx)}
                        onMouseEnter={() => setOpenDropdown(idx)}
                        className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium transition-all 
                          duration-300 rounded-lg group ${desktopTextBase}`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${openDropdown === idx ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openDropdown === idx && (
                        <div
                          onMouseLeave={() => setOpenDropdown(null)}
                          className="absolute left-0 mt-2 w-[400px] bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-slideDown"
                        >
                          {renderDropdownContent(link.dropdown)}
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavigation(link.path)}
                      className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-cyan-100 ${location.pathname === link.path ? "text-cyan-600" : desktopTextBase}`}
                    >
                      {link.label}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden relative p-2 rounded-xl hover:bg-red-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${mobileTextBase}`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl">
          <div className="h-full overflow-y-auto pt-20 pb-6 px-4">
            <div className="max-w-md mx-auto space-y-2">
              {navLinks.map((link, idx) => (
                <div key={idx} className="overflow-hidden rounded-xl border border-gray-200 bg-white/90">
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(idx)}
                        className={`w-full text-left px-5 py-4 font-semibold hover:bg-gray-100 transition-all duration-300
                           flex items-center justify-between ${mobileTextBase}`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${openDropdown === idx ? "rotate-180" : ""}`}
                        />
                      </button>

                      <div
                        className={`transition-all duration-300 overflow-hidden ${openDropdown === idx ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
                      >
                        <div className="px-3 pb-3 space-y-2 bg-white/90">
                          {Array.isArray(link.dropdown) && link.dropdown.length > 0 ? (
                            !!link.dropdown[0].items ? (
                              link.dropdown.map((category, cIdx) => (
                                <div key={cIdx} className="mb-4">
                                  <div className="px-3 py-2 text-xs font-bold text-cyan-600 uppercase tracking-wider border-b border-cyan-600/20">
                                    {category.label}
                                  </div>
                                  <div className="space-y-1 mt-2">
                                    {Array.isArray(category.items) &&
                                      category.items.map((it, iIdx) => (
                                        <button
                                          key={it.path || iIdx}
                                          onClick={() => handleNavigation(it.path)}
                                          className={`block w-full text-left px-4 py-3 text-sm transition-all duration-300 ${useLightText ? 'text-neutral-800 hover:text-black' : 'text-gray-700 hover:text-gray-900'} hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-transparent rounded-lg`}
                                        >
                                          {it.label}
                                        </button>
                                      ))}
                                  </div>
                                </div>
                              ))
                            ) : (
                              link.dropdown.map((item, itemIdx) => (
                                <button
                                  key={item.path || itemIdx}
                                  onClick={() => handleNavigation(item.path)}
                                  className={`block w-full text-left px-4 py-3 text-sm transition-all duration-300 ${useLightText ? 'text-neutral-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-transparent rounded-lg`}
                                >
                                  {item.label}
                                </button>
                              ))
                            )
                          ) : null}
                        </div>
                      </div>
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavigation(link.path)}
                      className={`w-full text-left px-5 py-4 font-semibold hover:bg-gray-100 transition-all duration-300 ${location.pathname === link.path ? "text-cyan-600 bg-gray-100" : mobileTextBase}`}
                    >
                      {link.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;