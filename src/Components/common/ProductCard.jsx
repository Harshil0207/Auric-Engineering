import React, { memo } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ProductCard = memo(({ item, index, variants, onImageError, aspect = "aspect-square", className = "" }) => {
    const fallback = "https://source.unsplash.com/800x600/?flange,industrial";

    return (
        <motion.div
            key={item.name}
            custom={index}
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-sky-400/50 hover:-translate-y-1 ${className}`}
            aria-label={item.name}
        >
            <div className={`${aspect} overflow-hidden`}>
                <motion.img
                    src={item.image || fallback}
                    alt={item.name}
                    loading="lazy"
                    onError={(e) => {
                        if (onImageError) onImageError(e);
                        else e.currentTarget.src = fallback;
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 220, damping: 26 }}
                />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <div className="bg-black/60 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/10">
                    <h4 className="text-white font-semibold text-base sm:text-lg mb-1">
                        {item.name}
                    </h4>
                    <p className="text-white/80 text-sm sm:text-base mb-2">
                        {item.description}
                    </p>
                    {Array.isArray(item.specs) && (
                        <div className="space-y-1">
                            {item.specs.map((s, i) => (
                                <p key={i} className="text-cyan-300/80 text-xs sm:text-sm">
                                    • {s}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
});

ProductCard.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string,
        description: PropTypes.string,
        specs: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    index: PropTypes.number,
    variants: PropTypes.object,
    onImageError: PropTypes.func,
    aspect: PropTypes.string,
    className: PropTypes.string,
};

ProductCard.displayName = "ProductCard";
export default ProductCard;