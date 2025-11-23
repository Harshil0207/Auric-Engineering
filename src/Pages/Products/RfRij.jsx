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

const RfRij = memo(() => {
  const flangeTypes = useMemo(
    () => [
      {
        name: "Standard RF Flange",
        image: "https://www.tirupatiforge.com/images/products/slip-on.png",
        description:
          "Raised Face (RF) flange ensures enhanced gasket sealing in general process applications. Manufactured to precision from high-grade materials.",
        specs: [
          "Pressure Rating: 150-300#",
          "Material: Carbon Steel, Stainless Steel",
          'Size Range: up to 24"',
        ],
      },
      {
        name: "High-Pressure RF Flange",
        image: "https://www.tirupatiforge.com/images/products/weld-neck.png",
        description:
          "Thicker and engineered for 600 Class or higher. Guarantees long-life service in rigorous environments.",
        specs: [
          "Pressure Rating: 600#",
          "Material: Alloy Steel, Stainless Steel",
          'Size Range: up to 8"',
        ],
      },
      {
        name: "Ring Type Joint (RTJ) Flange",
        image: "https://www.tirupatiforge.com/images/products/blind.png",
        description:
          "For leak-free performance under high pressure, RTJ flanges (RIJ) feature a machined groove and metal ring gasket. Ideal for critical applications.",
        specs: [
          "Pressure Rating: 900-1500#",
          "Material: Forged Steel, Custom Alloys",
          'Size Range: up to 6"',
        ],
      },
      {
        name: "Extra High-Pressure RTJ Flange",
        image: "https://www.tirupatiforge.com/images/products/lap-jiont.png",
        description:
          "Specially designed for 2500 Class and critical containment, supporting utmost strength and sealing integrity.",
        specs: [
          "Pressure Rating: 2500#",
          "Material: All High-Strength Alloys",
          'Size Range: up to 4"',
        ],
      },
      {
        name: "Custom RF / RIJ Flange",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYG_bPlPEFtwAxILF7GeYoI1TnmXyBHAkwRw&s",
        description:
          "Tailored design and material, manufactured per client specification for specialty pressure ratings and performance.",
        specs: [
          "Size: As Required",
          "Material: All Grades",
          "Specs: To Client Detail",
        ],
      },
    ],
    []
  );

  const handleImageError = useCallback((event) => {
    event.currentTarget.src = "https://source.unsplash.com/800x600/?flange,industrial";
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
            text="RF & RIJ Flanges"
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
         We are offering a superior quality of RF & RIJ Flange which is manufactured with high grade of raw material. We have various sizes and dimensions available and can also customize clients demand with detailed specification. It is manufactured in accordance of requisite norms and standards and is delivered within given time frame.  </motion.p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="#products"
              className="btn-responsive touch-target rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium shadow-responsive animate-responsive"
            >
              View Products
            </a>
            <a
              href="#specifications"
              className="btn-responsive touch-target rounded-full border-2 border-gray-300 hover:bg-gray-50 text-gray-700 animate-responsive"
            >
              Specifications
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">RF & RIJ Flange Options</h2>
            <p className="text-gray-600 text-responsive-body max-w-3xl mx-auto">
              Discover our range of Raised Face and Ring Joint flanges for all pressure classes, custom projects, and demanding fluid containment applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {flangeTypes.map((flange, index) => (
              <ProductCard
                key={flange.name}
                item={flange}
                index={index}
                variants={imageContainerVariants}
                onImageError={handleImageError}
                aspect="h-48 sm:h-56 md:h-64"
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Specifications */}
      <section id="specifications" className="section-padding bg-gradient-to-b from-white to-blue-50/30">
        <div className="container-responsive">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border-2 border-gray-200 bg-white p-responsive shadow-lg"
          >
            <div className="grid-responsive-2 gap-8">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">Available Sizes</h3>
                <div className="space-y-2 text-gray-700">
                  <div>Up to 24" (150 & 300 Class)</div>
                  <div>Up to 8" (600 Class)</div>
                  <div>Up to 6" (900 & 1500 Class)</div>
                  <div>Up to 4" (2500 Class)</div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">Key Features</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Strength</li>
                  <li>Dimensionally precise</li>
                  <li>Resistant to corrosion</li>
                  <li>Custom sizing and detailed specifications available</li>
                  <li>Manufactured to global standards (ASME/EN/DIN)</li>
                  <li>Delivered promptly with thorough inspection</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-16 sm:h-20" />
    </div>
  );
});

RfRij.displayName = "RfRij";

export default RfRij;
