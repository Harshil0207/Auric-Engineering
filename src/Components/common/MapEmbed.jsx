import React, { memo, useRef, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

/**
 * MapEmbed
 * - Accepts either iframeSrc (any google maps url) OR lat & lng to build an embed URL.
 * - Lazy loads the iframe via IntersectionObserver.
 * - Falls back to a directions link/button when iframe fails to load.
 */
const MapEmbed = memo(({ iframeSrc, lat, lng, zoom = 17, directionsUrl, className = "" }) => {
    const ref = useRef(null);
    const [showFrame, setShowFrame] = useState(false);
    const [loadError, setLoadError] = useState(false);

    // Build embed URL:
    const embedUrl = useMemo(() => {
        if (iframeSrc) {
            // If iframeSrc already looks like an embed or has output=embed, use it.
            if (/\/embed\/|output=embed|google\.com\/maps\/embed/.test(iframeSrc)) {
                return iframeSrc;
            }
            // If URL contains @lat,lng, try to extract them
            const atMatch = iframeSrc.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
            if (atMatch) {
                const aLat = atMatch[1];
                const aLng = atMatch[2];
                return `https://www.google.com/maps?q=${encodeURIComponent(aLat + "," + aLng)}&z=${zoom}&output=embed`;
            }
            // As a last resort, use the url in q param (works for many google maps links)
            try {
                const url = new URL(iframeSrc);
                const q = url.searchParams.get("q");
                if (q) {
                    return `https://www.google.com/maps?q=${encodeURIComponent(q)}&z=${zoom}&output=embed`;
                }
            } catch (e) {
                // fallthrough
            }
            // If none matched, just attempt to use it as the embed URL (some links work)
            return iframeSrc;
        }

        if (typeof lat === "number" && typeof lng === "number") {
            return `https://www.google.com/maps?q=${encodeURIComponent(lat + "," + lng)}&z=${zoom}&output=embed`;
        }

        return null;
    }, [iframeSrc, lat, lng, zoom]);

    useEffect(() => {
        if (!ref.current) return;
        if ("IntersectionObserver" in window) {
            const obs = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setShowFrame(true);
                            obs.disconnect();
                        }
                    });
                },
                { root: null, rootMargin: "300px", threshold: 0.01 }
            );
            obs.observe(ref.current);
            return () => obs.disconnect();
        } else {
            setShowFrame(true);
        }
    }, []);

    // Construct fallback link if not provided
    const fallbackLink = directionsUrl || iframeSrc || (lat && lng ? `https://www.google.com/maps?q=${lat},${lng}` : "#");

    return (
        <div ref={ref} className={className}>
           

            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-responsive bg-neutral-800">
                {showFrame && embedUrl && !loadError ? (
                    <iframe
                        src={embedUrl}
                        width="100%"
                        height="480"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Location map"
                        className="w-full h-[60vh]"
                        onError={() => setLoadError(true)}
                    />
                ) : showFrame && loadError ? (
                    <div className="p-8 text-center">
                        <p className="text-sm text-neutral-300 mb-4">Map failed to load.</p>
                        <a
                            href={fallbackLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 rounded-full bg-sky-500 text-white font-medium"
                        >
                            Open in Google Maps
                        </a>
                    </div>
                ) : (
                    <div className="w-full h-[60vh] bg-neutral-900/40 animate-pulse" />
                )}
            </div>
        </div>
    );
});

MapEmbed.propTypes = {
    iframeSrc: PropTypes.string,
    lat: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    lng: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    zoom: PropTypes.number,
    directionsUrl: PropTypes.string,
    className: PropTypes.string,
};

MapEmbed.displayName = "MapEmbed";
export default MapEmbed;