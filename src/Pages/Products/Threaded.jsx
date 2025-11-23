import { memo, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import BlurText from "../../Components/utils/BlurText.jsx";
import Particles from "../../Components/utils/Particles.jsx";
import { fadeIn, cardVariants, imageContainerVariants } from "../../constants/animations.js";

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
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
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

const Threaded = memo(() => {
  const flangeTypes = useMemo(
    () => [
      {
        name: "Threaded Flange (Standard)",
        image: "https://www.tirupatiforge.com/images/products/threaded.png",
        description:
          "Ideal for non-welded pipe connections in low-pressure, non-critical systems. Internal threads allow easy, quick installation.",
        specs: [
          "Pressure Rating: 150-900#",
          "Material: Carbon Steel, Stainless Steel",
          'Size Range: 1/2" - 4"',
        ],
      },
      {
        name: "Threaded Flange with Hub",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqy39RGF81LpXRm6OA_eTuVfpBJY3Kjdt5Sg&s",
        description:
          "Provides added reinforcement in the neck; suited for higher mechanical stress while retaining easy, weld-free assembly.",
        specs: [
          "Hubbed for extra strength",
          "Material: Carbon Steel, Alloy Steel",
          'Thread Types: NPT/BSP',
        ],
      },
      {
        name: "Threaded Reducing Flange",
        image: "https://www.metalfed.com/wp-content/uploads/images/threaded-reducing-flange-supplier.jpg",
        description:
          "Connects pipes of different diameters with internal threads, useful for system modifications without re-welding.",
        specs: [
          "Custom Size Reductions Available",
          "Material: Stainless Steel, Alloy Steel",
          'Bore: Reduces to any custom size',
        ],
      },
      {
        name: "Threaded Blind Flange",
        image: "https://www.tirupatiforge.com/images/products/blind.png",
        description:
          "Used to close pipe ends in systems where future threading access may be required. Ensures easy reopening without cutting or welding.",
        specs: [
          "Pressure Rating: 150-900#",
          "Material: Carbon Steel, Stainless Steel",
          'Size Range: 1/2" - 4"',
        ],
      },
      {
        name: "Custom Threaded Flange",
        image: "https://www.tirupatiforge.com/images/products/threaded.png",
        description:
          "Manufactured to exact specifications for special process requirements. All thread types and finishes available.",
        specs: [
          "Custom Design & Drilling",
          "Exotic Materials & Coatings",
          "Precision Machined Threads",
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

      {/* Hero */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
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

        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 -mt-25">
          <BlurText
            text="Threaded Flanges"
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
         We are also manufacturing a wide gamut of Screwed Threaded Flanges which are produced with high quality raw material and manufactured at highly advanced unit equipped with latest technology. Based on the sizes, dimensions, shapes and length of these flanges, we can customize the products for our respected clients. </motion.p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="#products"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Products
            </a>
            <a
              href="#specifications"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-gray-300 hover:bg-gray-50 text-gray-700 font-medium transition-all duration-300"
            >
              Specifications
            </a>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Threaded Flange Types
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                Discover our portfolio of threaded flanges engineered for easy assembly, maximum reliability, and compatibility with every major piping standard.
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
        </div>
      </section>

      {/* Specifications */}
      <section id="specifications" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border-2 border-gray-200 bg-gradient-to-br from-blue-200 via-cyan-150 to-white p-8 sm:p-10 lg:p-12 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">Material Standards</h3>
                <div className="space-y-3 text-gray-700">
                  <p>– ASTM A105 - Carbon Steel</p>
                  <p>– ASTM A182 - Stainless Steel</p>
                  <p>– ASTM A350 - Low Temperature Steel</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">Quality Assurance</h3>
                <div className="space-y-3 text-gray-700">
                  <p>– Thread Fit Verification</p>
                  <p>– Material Certification</p>
                  <p>– Pressure Testing and Inspection</p>
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

Threaded.displayName = "Threaded";

export default Threaded;
