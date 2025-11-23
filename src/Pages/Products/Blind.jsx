import { memo, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import BlurText from "../../Components/utils/BlurText.jsx";
import Particles from "../../Components/utils/Particles.jsx";
import { fadeIn, cardVariants, imageContainerVariants } from "../../constants/animations.js";

/* === ProductCard (light theme, amber accents) === */
const ProductCard = memo(({ item, index, onImageError, aspect = "aspect-square" }) => (
  <motion.div
    custom={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-amber-400 hover:-translate-y-2"
  >
    {/* Image Container */}
    <div className={`${aspect} overflow-hidden relative`}>
      <motion.img
        src={item.image}
        alt={item.name}
        loading="lazy"
        onError={onImageError}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        whileHover={{ scale: 1.03 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
    </div>

    {/* Content */}
    <div className="p-5 sm:p-6 space-y-3">
      <h4 className="text-gray-900 font-bold text-lg sm:text-xl group-hover:text-amber-500 transition-colors duration-300">
        {item.name}
      </h4>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
        {item.description}
      </p>

      {/* Specs */}
      <div className="space-y-2 pt-2">
        {item.specs.map((spec, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
            <p className="text-amber-600 text-xs sm:text-sm">{spec}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Hover Glow Effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/10 via-transparent to-cyan-200/8" />
    </div>
  </motion.div>
));

ProductCard.displayName = "ProductCard";

/* === Blind Flanges Page (light theme + grid) === */
const Blind = memo(() => {
  const blindFlanges = useMemo(
    () => [
      {
        name: "Blind Flange - Raised Face (RF)",
        image: "https://www.tirupatiforge.com/images/products/blind.png",
        description:
          "Standard raised face blind flange used to close pipe ends and pressure vessel openings with reliable sealing performance.",
        specs: [
          "Class: 150# - 2500#",
          "Materials: Carbon Steel, Stainless Steel, Alloy Steel",
          'Sizes: up to 24 (150 & 300 Class), up to 8 (600 Class), up to 6 (900 & 1500 Class), up to 4 (2500 Class)'
        ],
      },
      {
        name: "Blind Flange - Flat Face (FF)",
        image: "https://www.induskart.co.in/wp-content/uploads/2023/05/Flat-Face.png",
        description:
          "Flat face blind flange recommended where the flange faces of mating components are flat and softer gaskets are used.",
        specs: [
          "Class: 150# - 600#",
          "Materials: Carbon Steel, Stainless Steel",
          'Sizes: Common up to 24"'
        ],
      },
      {
        name: "RTJ Blind Flange",
        image: "https://fieldindustries.com/wp-content/uploads/2020/10/api-rtj-blind-flange.png",
        description:
          "Ring-type-joint blind flange for critical services requiring metal-to-metal sealing and high-integrity leak control.",
        specs: [
          "RTJ Groove for ring gasket",
          "Used in Petrochemical and Refinery applications",
          'Sizes: Typically up to 24" depending on class'
        ],
      }
    ],
    []
  );

  const handleImageError = useCallback((event) => {
    event.currentTarget.src = "https://source.unsplash.com/800x600/?industrial,flange";
  }, []);

  return (
    <div className="relative bg-neutral-50 text-gray-900 min-h-screen">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <section className="relative overflow-hidden section-padding">
        <Particles
          className="absolute inset-0 -z-10"
          particleCount={160}
          particleSpread={8}
          speed={0.08}
          particleColors={["#f59e0b", "#fbbf24", "#06b6d4"]}
          moveParticlesOnHover
          particleHoverFactor={0.6}
          alphaParticles
          particleBaseSize={64}
          sizeRandomness={1.0}
          cameraDistance={24}
        />

        <div className="container-responsive space-y-6 -mt-25">
          <BlurText
            text="Blind Flanges"
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
          We are offering a superior quality of Blind Flange which is manufactured with high grade of raw material. We have various sizes and dimensions available and can also customize clients demand with detailed specification. It is manufactured in accordance of requisite norms and standards and is delivered within given time frame.  </motion.p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="#products"
              className="btn-responsive touch-target rounded-full bg-amber-500/90 hover:bg-amber-400 text-white font-medium shadow-responsive animate-responsive"
            >
              View Products
            </a>
            <a
              href="#standards"
              className="btn-responsive touch-target rounded-full border border-gray-300 hover:bg-gray-50 text-gray-700 animate-responsive"
            >
              Sizes & Features
            </a>
          </div>
        </div>
      </section>

      <section id="products" className="container-responsive section-padding space-responsive">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-responsive"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Blind Flange Types</h2>
            <p className="text-gray-600 text-responsive-body max-w-3xl mx-auto">
              Blind flanges are used to close off the ends of piping systems or pressure vessels when valves or other equipment are not required.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blindFlanges.map((item, index) => (
              <ProductCard
                key={item.name}
                item={item}
                index={index}
                variants={imageContainerVariants}
                onImageError={handleImageError}
                aspect="aspect-square"
              />
            ))}
          </div>
        </motion.div>
      </section>

      <section id="standards" className="section-padding">
        <div className="container-responsive">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border-2 border-gray-200 bg-gradient-to-br from-amber-200 via-amber-100 to-white p-responsive shadow-lg"
          >
            <div className="grid-responsive-2 gap-8">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">SIZES</h3>
                <div className="space-y-3 text-gray-700">
                  <p>– Size up to 24 (150 & 300 Class)</p>
                  <p>– Size up to 8 (600 Class)</p>
                  <p>– Size up to 6 (900 & 1500 Class)</p>
                  <p>– Size up to 4 (2500 Class)</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">FEATURES</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Strength</p>
                  <p>• Dimensionally precise</p>
                  <p>• Resistant to corrosion</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">Standards & Testing</h3>
              <p className="text-gray-700">Manufactured in accordance with ASME / ANSI specifications. Available with material test certificates, hydrostatic testing and NDT on request.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
});

Blind.displayName = "Blind";
export default Blind;
