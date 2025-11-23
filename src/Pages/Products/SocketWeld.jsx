import { memo, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import BlurText from "../../Components/utils/BlurText.jsx";
import Particles from "../../Components/utils/Particles.jsx";
import { fadeIn, cardVariants, imageContainerVariants } from "../../constants/animations";

// === ProductCard (light theme, cyan accents) ===
const ProductCard = memo(({ item, index, onImageError, aspect = "aspect-square" }) => (
  <motion.div
    custom={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay: index * 0.08, duration: 0.5 }}
    className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-cyan-400 hover:-translate-y-2"
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
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/8" />
    </div>
  </motion.div>
));

ProductCard.displayName = "ProductCard";

// Main Component (light theme + grid)
const SocketWeldFlange = memo(() => {
  const flangeTypes = useMemo(
    () => [
      {
        name: "Standard Socket Weld Flange",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2k2ogHKfgRjNyxLSuxiqtroy4GnMDFLmQUA&s",
        description: "Forged flanges for pipelines with smaller diameters and high pressure.",
        specs: [
          "Size Range: ½” to 24”",
          "Material: Carbon Steel, Stainless Steel",
          "Pressure Class: 150#, 300#, 600#"
        ],
      },
      {
        name: "Raised Face Socket Weld Flange",
        image:
          "https://arcellorcontrols.com/wp-content/uploads/2022/02/socket-weld-flange.jpg",
        description: "Provides additional sealing area to prevent leakage in critical connections.",
        specs: [
          "Face Type: Raised",
          "Applicable to: Process Lines",
          "Pressure Class: 150# to 2500#"
        ],
      },
      {
        name: "Ring Type Joint Socket Weld Flange",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-do--1W92TVcnVyNfx7V4zqIlWzIy9DhWw&s",
        description: "Special ring groove for demanding pressure and safety applications.",
        specs: [
          "Seal Type: RTJ",
          "Material: Alloy Steel",
          "Max Pressure: 2500#"
        ],
      },
      {
        name: "Custom Socket Weld Flange",
        image:
          "https://tiimg.tistatic.com/fp/1/005/610/socket-weld-pipe-flange-974.jpg",
        description: "Custom designed flanges for specialty pipeline assemblies.",
        specs: [
          "Design: Custom",
          "Material: As requested",
          "Finish: Machined, Coated"
        ],
      },
    ],
    []
  );

  const handleImageError = useCallback((event) => {
    event.currentTarget.src =
      "https://source.unsplash.com/800x600/?flange,industrial";
  }, []);

  return (
    <div className="relative bg-neutral-50 text-gray-900 min-h-screen">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative overflow-hidden section-padding">
        <Particles
          className="absolute inset-0 -z-10"
          particleCount={180}
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
            text="Socket Weld Flanges"
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
          We are offering a wide gamut of Socket Weld which is acclaimed in the Indian market. We fabricate these Sockets Weld with premium quality of raw material which is procured from renowned manufacturers of the country.  </motion.p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="#products"
              className="btn-responsive touch-target rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium shadow-responsive animate-responsive"
            >
              View Flange Types
            </a>
            <a
              href="#capabilities"
              className="btn-responsive touch-target rounded-full border-2 border-gray-300 hover:bg-gray-100 text-gray-700 animate-responsive"
            >
              Manufacturing Capabilities
            </a>
          </div>
        </div>
      </section>

      {/* Products Grid */}
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Socket Weld Flange Types
            </h2>
            <p className="text-gray-600 text-responsive-body max-w-3xl mx-auto">
              Complete range of socket weld flanges designed for compact, secure jointing in various process and utility piping applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {flangeTypes.map((flange, index) => (
              <ProductCard
                key={flange.name}
                item={{
                  name: flange.name,
                  image: flange.image,
                  description: flange.description,
                  specs: flange.specs,
                }}
                index={index}
                variants={imageContainerVariants}
                onImageError={handleImageError}
                aspect="h-48 sm:h-56 md:h-64"
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="section-padding bg-gradient-to-b from-white to-blue-50/30">
        <div className="container-responsive">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border-2 border-gray-200 bg-gradient-to-br from-blue-200 via-cyan-150 to-white p-responsive shadow-lg"
          >
            <div className="grid-responsive-2 gap-8">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">Manufacturing Capabilities</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• CNC Machining</p>
                  <p>• High-Precision Forging</p>
                  <p>• Heat Treatment</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">Quality Standards</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• ANSI/ASME B16.5</p>
                  <p>• DIN Standards</p>
                  <p>• NDT & Pressure Testing</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-16 sm:h-20" />
    </div>
  );
});

SocketWeldFlange.displayName = "SocketWeldFlange";

export default SocketWeldFlange;
