import { memo, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import BlurText from "../../Components/utils/BlurText.jsx";
import Particles from "../../Components/utils/Particles.jsx";
import { fadeIn, cardVariants, imageContainerVariants } from "../../constants/animations";

const ProductCard = memo(({ item, index, onImageError, aspect = "aspect-square" }) => (
  <motion.div
    custom={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay: index * 0.08, duration: 0.5 }}
    className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-amber-400 hover:-translate-y-2"
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent opacity-40
       group-hover:opacity-60 transition-opacity duration-500" />
    </div>

    {/* Content */}
    <div className="p-5 sm:p-6 space-y-3">
      <h4 className="text-gray-900 font-bold text-lg sm:text-xl group-hover:text-amber-500 transition-colors duration-300">
        {item.name}
      </h4>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        {item.description}
      </p>

      {/* Specs */}
      <div className="space-y-2 pt-2">
        {item.specs.map((spec, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
            <p className="text-amber-600 text-xs sm:text-sm">{spec}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Hover Glow Effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/10 via-transparent to-cyan-100/6" />
    </div>
  </motion.div>
));

ProductCard.displayName = "ProductCard";

const Reducing = memo(() => {
  const flangeTypes = useMemo(
    () => [
    
     {
        name: "Quick Install Reducing Flange",
        image:
          "https://fieldindustries.com/wp-content/uploads/2020/10/carbon-stainless-alloy-reducing-weld-neck-flange.png",
        description:
          "Rapid-connect reducing flanges for time-critical or mobile installations. Saves installation time and labor.",
        specs: ["Connection: Push-Pull", "Pressure Rating: 150-900#", 'Size Range: 1" - 10"'],
      },
      {
        name: "Standard Reducing Flange",
        image:
          "https://www.hgffgroup.com/wp-content/uploads/2019/07/flange-groove-tongue-type_meitu_17.jpg",
        description:
          "Designed to connect pipes of different diameters with superior structural integrity. Ideal for process, chemical, and utility piping.",
        specs: ["Pressure Rating: 150-2500#", "Material: Forged/Carbon/Stainless Steel", 'Size Range: 1" - 24"'],
      },
      {
        name: "High-Pressure Reducing Flange",
        image:
          "https://www.airaindia.com/wp-content/uploads/2024/09/High-Pressure-Reducing-Valve-Flanged-05.webp",
        description:
          "Engineered for ultra-high pressure installations, precisely machined for leak-free performance in severe environments.",
        specs: ["Pressure Rating: up to 2500#", "Material: Alloy Steel", 'Size Range: 1" - 12"'],
      },
      {
        name: "Corrosion Resistant Reducing Flange",
        image:
          "https://5.imimg.com/data5/SELLER/Default/2024/9/453486685/BF/VD/IG/3355448/industrial-stainless-steel-reducing-flange-500x500.jpeg",
        description:
          "Manufactured from 316L stainless steel for optimal chemical and salt resistance in process and water lines.",
        specs: ["Material: 316L SS & Duplex", "Pressure Rating: 150-900#", 'Size Range: 1" - 18"'],
      },
      {
        name: "Low Temperature Reducing Flange",
        image:
          "https://tiimg.tistatic.com/fp/1/009/034/stainless-steel-reducing-flange--296.jpg",
        description:
          "Cryogenic-grade flanges for applications requiring reliable performance in sub-zero conditions.",
        specs: ["Temperature Service: -196°C", "Material: Special Alloy/LTCS", 'Size Range: 1" - 12"'],
      },
     
      {
        name: "Custom Reducing Flange",
        image:
          "https://www.acealloysllp.com/images/products/reducing-flanges.jpg",
        description:
          "Fully engineered to meet client requirements including special bores, materials, coatings, and international standards.",
        specs: ["Design: Custom to Spec", "Material: Per Request", "Size: Any combination"],
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
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        <Particles
          className="absolute inset-0 -z-10"
          particleCount={180}
          particleSpread={8}
          speed={0.08}
          particleColors={["#f59e0b", "#fbbf24", "#06b6d4"]}
          moveParticlesOnHover
          particleHoverFactor={0.5}
          alphaParticles
          particleBaseSize={80}
          sizeRandomness={1.0}
          cameraDistance={24}
        />

        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 -mt-25">
          <BlurText
            text="Reducing Flanges"
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
         We are offering a superior quality of Reducing  Flange which is manufactured with high grade of raw material. We have various sizes and dimensions available and can also customize clients demand with detailed specification. It is manufactured in accordance of requisite norms and standards and is delivered within given time frame.  </motion.p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="#products"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-amber-500/90 hover:bg-amber-400 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Products
            </a>
            <a
              href="#specifications"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-gray-300 hover:bg-gray-100 text-gray-700 font-medium transition-all duration-300"
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
                Reducing Flange Types & Applications
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                Explore our wide range of reducing flanges engineered for process, energy, and utility pipelines with varying pressure and corrosion demands.
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
            className="relative overflow-hidden rounded-3xl border-2 border-gray-200 bg-gradient-to-br from-amber-200 via-amber-100 to-white p-8 sm:p-10 lg:p-12 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">Material & Standards</h3>
                <div className="space-y-3 text-gray-700">
                  <p>– ASTM A105/A182/A350 - Steel Grades</p>
                  <p>– ASME B16.5 / EN 1092-1 Compliant</p>
                  <p>– Custom Alloy & Non-Ferrous Available</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">Quality Features</h3>
                <div className="space-y-3 text-gray-700">
                  <p>– Hydrostatic & Pressure Testing</p>
                  <p>– Dimensional & Surface Inspection</p>
                  <p>– Full Material Traceability & Mill Certification</p>
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

Reducing.displayName = "Reducing";

export default Reducing;
