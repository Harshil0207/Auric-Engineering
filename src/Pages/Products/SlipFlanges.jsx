import { memo, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import BlurText from "../../Components/utils/BlurText.jsx";
import Particles from "../../Components/utils/Particles.jsx";
import { fadeIn, cardVariants, imageContainerVariants } from "../../constants/animations.js";

// === ProductCard Component ===
const ProductCard = memo(({ item, index, onImageError }) => (
  <motion.div
    custom={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:border-cyan-400 hover:-translate-y-2"
  >
    {/* Image Container */}
    <div className="aspect-square overflow-hidden relative">
      <motion.img
        src={item.image}
        alt={item.name}
        loading="lazy"
        onError={onImageError}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        whileHover={{ scale: 1.05 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
    </div>

    {/* Content */}
    <div className="p-5 sm:p-6 space-y-3">
      <h4 className="text-gray-900 font-bold text-lg sm:text-xl group-hover:text-cyan-600 transition-colors duration-300">
        {item.name}
      </h4>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
        {item.description}
      </p>

      {/* Specs */}
      <div className="space-y-2 pt-2">
        {item.specs.map((spec, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
            <p className="text-cyan-600 text-xs sm:text-sm">{spec}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Hover Glow Effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10" />
    </div>
  </motion.div>
));

ProductCard.displayName = "ProductCard";

// === SlipFlanges Page ===
const SlipFlanges = memo(() => {
  const slipOnFlanges = useMemo(
    () => [
      {
        name: "Slip-On Raised Face Flanges",
        image: "https://www.tirupatiforge.com/images/products/slip-on.png",
        description:
          "Standard slip-on flange with a raised sealing surface, offering strong sealing performance and easy installation.",
        specs: [
          "Pressure Rating: 150# - 2500#",
          "Material: CS, SS, Alloy Steel",
          'Sizes: 1/2" to 48"',
          "Face Type: Raised Face (RF)",
        ],
      },
      {
        name: "Slip-On Flat Face Flanges",
        image:
          "https://www.induskart.co.in/wp-content/uploads/2023/05/Flat-Face.png",
        description:
          "Preferred for low-pressure applications and soft gasket materials. Commonly used in water lines and industrial piping.",
        specs: [
          "Pressure Rating: 150# - 600#",
          "Material: Carbon Steel / Stainless Steel",
          'Sizes: 1/2" to 24"',
          "Face Type: Flat Face (FF)",
        ],
      },
      {
        name: "Slip-On Long Neck Flanges",
        image:
          "https://vishadforge.com/wp-content/uploads/2021/07/Welding-Neck-Flanges.jpg",
        description:
          "Designed for high-temperature and high-pressure lines where additional reinforcement and alignment are required.",
        specs: [
          "Pressure Rating: 300# - 1500#",
          "Material: Alloy Steel / Stainless Steel",
          'Sizes: 2" to 48"',
          "Feature: Extended hub for stability",
        ],
      },
      {
        name: "Slip-On RTJ Flanges",
        image: "https://www.indusroof.com/pub/media/catalog/product/cache/cfd2a6dbe1bba1c6c4eeb6960592327b/f/l/flanges_carbon-steel-ring-type-joint-rtj-blind-flange.png",
        description:
          "Ring-Type-Joint groove design for critical sealing applications in high-pressure environments.",
        specs: [
          "Pressure Rating: 600# - 2500#",
          "Material: Stainless Steel / Alloy",
          "RTJ Groove for Metal Gaskets",
          "Oil & Gas Applications",
        ],
      },
      {
        name: "Custom Slip-On Flanges",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjeoLgnNp-nW2EY2JUYnWaH9LKGTYJ1LHOZg&s",
        description:
          "Engineered custom slip-on flanges tailored to meet specific industrial requirements and unique specifications.",
        specs: [
          "Custom Bores & Dimensions",
          "Exotic Material Options",
          "Precision CNC Machined",
          "Special Coatings Available",
        ],
      },
    ],
    []
  );

  const handleImageError = useCallback((event) => {
    event.currentTarget.src =
      "https://source.unsplash.com/800x600/?flange,factory,steel";
  }, []);

  return (
    <div className="relative bg-neutral-50 text-gray-900 min-h-screen">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* === Hero Section === */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          <BlurText
            text="Slip-On Flanges"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            delay={120}
          />
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl"
          >
            We are manufacturing high quality Slip on Flanges which are suitable for low pressure applications. Manufactured with high grade raw material such as stainless steel, mild steel and other metallic products, our range is appreciated in the global market.
          </motion.p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="#products"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View Products
            </a>
            <a
              href="#applications"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 text-gray-700 hover:text-blue-700 font-medium transition-all duration-300"
            >
              Applications
            </a>
          </div>
        </div>
      </section>

      {/* === Product Variants Section === */}
      <section id="products" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Slip-On Flange Types
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                Explore our precision-engineered slip-on flange range meeting global
                industrial & pipeline standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {slipOnFlanges.map((item, index) => (
                <ProductCard
                  key={item.name}
                  item={item}
                  index={index}
                  onImageError={handleImageError}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* === Applications Section === */}
      <section id="applications" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border-2 border-gray-200 bg-gradient-to-br from-blue-50 via-cyan-50 to-white p-6 sm:p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Industry Applications */}
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Industry Applications
                </h3>
                {[
                  "Oil & Gas Distribution",
                  "Water Treatment Plants",
                  "Chemical Processing",
                  "Marine & Offshore Systems",
                  "HVAC Systems",
                  "Power Generation",
                ].map((app, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0" />
                    <p className="text-gray-700 text-sm sm:text-base">{app}</p>
                  </div>
                ))}
              </div>

              {/* Quality Standards */}
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Quality Standards
                </h3>
                {[
                  "ASME B16.5 / B16.47 Certified",
                  "DIN & EN Standards",
                  "ISO 9001:2015 Certified",
                  "Hydro-Tested & MPI Inspection",
                  "UT & PMI Testing",
                  "Material Traceability",
                ].map((q, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                    <p className="text-gray-700 text-sm sm:text-base">{q}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Specifications */}
            <div className="mt-8 pt-8 border-t-2 border-gray-200">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Technical Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm sm:text-base text-gray-700">
                <div>
                  <span className="font-semibold text-cyan-600">Face Types:</span> RF, FF, RTJ
                </div>
                <div>
                  <span className="font-semibold text-cyan-600">Pressure Class:</span> 150# - 2500#
                </div>
                <div>
                  <span className="font-semibold text-cyan-600">Temperature:</span> -20°C to 400°C
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Space */}
      <div className="h-16 sm:h-20" />
    </div>
  );
});

SlipFlanges.displayName = "SlipFlanges";
export default SlipFlanges;