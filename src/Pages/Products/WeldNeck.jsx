import React, { memo, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import BlurText from "../../Components/utils/BlurText.jsx";
import Particles from "../../Components/utils/Particles.jsx";
import { fadeIn, cardVariants } from "../../constants/animations.js";

/* === ProductCard (light theme) === */
const ProductCard = memo(({ item, index, onImageError, aspect = "aspect-square" }) => (
  <motion.div
    custom={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay: index * 0.08, duration: 0.5 }}
    className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-cyan-400 hover:-translate-y-2"
  >
    <div className={`${aspect} overflow-hidden relative`}>
      <motion.img
        src={item.image}
        alt={item.name}
        loading="lazy"
        onError={onImageError}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/6 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
    </div>

    <div className="p-5 sm:p-6 space-y-3">
      <h4 className="text-gray-900 font-bold text-lg sm:text-xl group-hover:text-cyan-600 transition-colors duration-300">
        {item.name}
      </h4>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
        {item.description}
      </p>

      <div className="space-y-2 pt-2">
        {item.specs.map((spec, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
            <p className="text-cyan-600 text-xs sm:text-sm">{spec}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/8" />
    </div>
  </motion.div>
));

ProductCard.displayName = "ProductCard";

/* === WeldNeck Page (light theme + grid) === */
const WeldNeck = memo(() => {
  const flangeProducts = useMemo(
    () => [
      {
        name: "Standard Weld-Neck Flange",
        image: "https://www.tirupatiforge.com/images/products/weld-neck.png",
        description:
          "High-integrity flange designed for high-pressure & high-temperature pipelines.",
        specs: ["Pressure: 150# to 2500#", "Material: Carbon & Stainless Steel", 'Size: 1/2" to 48"'],
      },
      {
        name: "Long Weld-Neck Flange",
        image:
          "https://fieldindustries.com/wp-content/uploads/2020/10/long-weld-neck-flange-400x400.png",
        description:
          "Extended neck for elevated reinforcement, ideal for vessels & high-temperature systems.",
        specs: ["Extended Hub Design", "Material: CS / SS / Alloy Steel", "Used in Pressure Vessels"],
      },
      {
        name: "Heavy-Wall Weld-Neck Flange",
        image:
          "https://www.octalsteel.com/wp-content/uploads/2018/08/weld-neck-flange-dimensions.jpg",
        description:
          "Reinforced flange for extremely high-pressure & demanding pipeline environments.",
        specs: ["Extra-thick Hub", "High Pressure & Shock Resistance", "Oil & Gas Approved"],
      },
      {
        name: "RTJ Weld-Neck Flange",
        image: "https://www.prochem.com.au/images/thumbs/0008076_25nb-cl1500-rtj-weldneck-flange-sch80-astm-a182-f304l_600.jpeg",
        description:
          "Ring-Type-Joint sealing groove for leak-free sealing in critical operations.",
        specs: ["RTJ Groove", "Used in Petrochemical & Refineries", "High Temperature Service"],
      },
      {
        name: "Specialty Weld-Neck (Custom)",
        image: "https://apiint.com/wp-content/uploads/2023/03/rfwn.png",
        description:
          "Custom engineered weld-neck flanges tailored for unique industrial requirements.",
        specs: ["Custom Bores & Face Types", "Exotic Materials Available", "Precision CNC Machined"],
      },
    ],
    []
  );

  const handleImageError = useCallback((event) => {
    event.currentTarget.src = "https://source.unsplash.com/800x600/?flange,factory,steel";
  }, []);

  return (
    <div className="relative bg-neutral-50 text-gray-900 min-h-screen">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* Hero */}
      <section className="relative overflow-hidden section-padding">
        <Particles
          className="absolute inset-0 -z-10"
          particleCount={200}
          particleSpread={8}
          speed={0.08}
          particleColors={["#06b6d4", "#60a5fa", "#93c5fd"]}
          moveParticlesOnHover
          particleHoverFactor={0.5}
          alphaParticles
          particleBaseSize={80}
          sizeRandomness={1.0}
          cameraDistance={24}
        />

        <div className="container-responsive space-y-6 -mt-25">
          <BlurText
            text="Weld-Neck Flanges"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            delay={120}
          />
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-responsive-body max-w-3xl text-gray-700"
          >
           We are manufacturing a comprehensive range of Weld Neck Flanges which are available in various sizes and dimensions to match the pipes. These flanges are mainly used to connect pipes and are considered as an important unit to hold up mechanical parts. Our Weld Neck Flanges are developed from superior quality carbon steel, stainless steel and alloy steel, and are built in compliance with client’s requirements.  </motion.p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="#products"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Products
            </a>
            <a
              href="#applications"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-gray-300 hover:bg-gray-100 text-gray-700 font-medium transition-all duration-300"
            >
              Applications
            </a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="container-responsive section-padding space-responsive">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="space-responsive"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Weld-Neck Flange Types
            </h2>
            <p className="text-gray-600 text-responsive-body max-w-3xl mx-auto">
              Explore our precision-engineered weld-neck flange range meeting global industrial & pipeline standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {flangeProducts.map((item, index) => (
              <ProductCard key={item.name} item={item} index={index} onImageError={handleImageError} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Applications */}
      <section id="applications" className="section-padding bg-gradient-to-b from-white to-blue-50/30">
        <div className="container-responsive">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border-2 border-gray-200 bg-gradient-to-br from-blue-50 via-cyan-50 to-white p-responsive shadow-lg"
          >
            <div className="grid-responsive-2 gap-8">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">Industry Applications</h3>
                {[
                  "Oil & Gas Pipelines",
                  "Petrochemical Plants",
                  "Power & Energy",
                  "Boilers and High-Temp Lines",
                ].map((app, i) => (
                  <p key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="w-3 h-3 bg-cyan-500 rounded-full" />
                    {app}
                  </p>
                ))}
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">Quality Standards</h3>
                {[
                  "ANSI / ASME B16.5",
                  "ASTM Material Grades",
                  "ISO Certified Production",
                  "NDT & Pressure Testing",
                ].map((q, i) => (
                  <p key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="w-3 h-3 bg-blue-500 rounded-full" />
                    {q}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-16 sm:h-20" />
    </div>
  );
});

WeldNeck.displayName = "WeldNeck";
export default WeldNeck;
