// ✅ Forged Fittings Page (Updated Content)

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
    className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-green-400 hover:-translate-y-2"
  >
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

    <div className="p-5 sm:p-6 space-y-3">
      <h4 className="text-gray-900 font-bold text-lg sm:text-xl group-hover:text-green-600 transition-colors duration-300">
        {item.name}
      </h4>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.description}</p>

      <div className="space-y-2 pt-2">
        {item.specs.map((spec, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
            <p className="text-green-600 text-xs sm:text-sm">{spec}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-tr from-green-400/10 via-transparent to-cyan-100/6" />
    </div>
  </motion.div>
));

ProductCard.displayName = "ProductCard";

const ForgedFitting = memo(() => {
  const fittingTypes = useMemo(
    () => [
      {
        name: "Forged Elbow (45° / 90°)",
        image:
          "https://5.imimg.com/data5/SELLER/Default/2021/8/AM/OK/DF/3832574/stainless-steel-socket-weld-elbow-forged-elbow-bend-45-90-180-degree-small-long-radius.jpg",
        description: "High-strength forged elbows designed for directional changes in high-pressure piping systems.",
        specs: ["Pressure Rating: 2000 / 3000 / 6000 LB", "Material: Carbon / Stainless / Alloy Steel", 'Size Range: 1/4" – 4"'],
      },
      {
        name: "Forged Tee",
        image: "https://m.media-amazon.com/images/I/71jJQEmV-3L._AC_UF1000,1000_QL80_.jpg",
        description: "Reliable forged tees used for equal or reducing branch connections in industrial pipelines.",
        specs: ["Pressure Rating: 2000 / 3000 / 6000 LB", "Material: CS / SS / Alloy Steel", 'Size Range: 1/4" – 4"'],
      },
      {
        name: "Forged Coupling",
        image:
          "https://image.made-in-china.com/2f0j00JgIonWsUAvur/ANSI-B16-1-6000-Lbs-Galvanized-Weld-Female-Thread-Half-Full-Forged-Carbon-Steel-Pipe-Fitting-Coupling.webp",
        description: "Durable forged couplings for connecting pipe segments in pressure piping applications.",
        specs: ["Pressure Rating: 2000 / 3000 / 6000 LB", "Material: Carbon / Stainless Steel", 'Size Range: 1/4" – 4"'],
      },
      {
        name: "Forged Union",
        image: "https://5.imimg.com/data5/WS/ZU/MC/SELLER-991456/ms-union.jpg",
        description: "Heavy-duty unions ideal for dismantling pipelines during inspection or maintenance.",
        specs: ["Pressure Rating: 3000 / 6000 LB", "Material: CS / SS / Alloy Steel", 'Size Range: 1/4" – 4"'],
      },
      {
        name: "Forged Cap",
        image: "https://3.imimg.com/data3/CE/RH/MY-5382001/forged-cap.jpg",
        description: "Precision engineered forged caps to close pipe ends in process piping systems.",
        specs: ["Pressure Rating: 2000 / 3000 LB", "Material: Carbon / Stainless Steel", 'Size Range: 1/4" – 4"'],
      },
      {
        name: "Forged Plug & Bushing",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdEdOLPpV3CRCIVGUuodzeGBy563tZMXuuQ&s",
        description: "Rugged forged plugs & bushings for sealing or adapting threaded piping connections.",
        specs: ["Pressure Rating: 3000 / 6000 LB", "Material: Carbon & Stainless Steel", 'Size Range: 1/4" – 4"'],
      },
    ],
    []
  );

  const handleImageError = useCallback((e) => {
    e.currentTarget.src = "https://source.unsplash.com/800x600/?forged,fittings,industrial";
  }, []);

  return (
    <div className="relative bg-neutral-50 text-gray-900 min-h-screen">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <Particles
          className="absolute inset-0 -z-10"
          particleCount={140}
          particleSpread={6}
          speed={0.06}
          particleColors={["#34d399", "#10b981", "#60a5fa"]}
          moveParticlesOnHover
          particleHoverFactor={0.5}
          alphaParticles
          particleBaseSize={72}
          sizeRandomness={1.0}
          cameraDistance={24}
        />

        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 -mt-25">
          <BlurText
            text="Forged Fittings"
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
            Engineered forged fittings built for demanding pressure systems. Durable, certified, and precision manufactured for industrial pipelines.
          </motion.p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="#products"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
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

      {/* Products */}
      <section id="products" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-green-50/30">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          <motion.div variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease: "easeOut" }} className="space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Forged Fittings Range</h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                Precision elbows, tees, couplings, unions, caps and plugs — made to global standards with full testing and traceability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {fittingTypes.map((item, index) => (
                <ProductCard key={item.name} item={item} index={index} variants={imageContainerVariants} onImageError={handleImageError} aspect="h-48 sm:h-56 md:h-64" />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specifications */}
      <section id="specifications" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-green-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border-2 border-gray-200 bg-gradient-to-br from-green-200 via-green-50 to-white p-8 sm:p-10 lg:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">Material Grades</h3>
                <div className="space-y-3 text-gray-700">
                  <p>– ASTM A105 Carbon Steel</p>
                  <p>– ASTM A182 Stainless & Alloy Steel</p>
                  <p>– ASTM A350 Low Temperature Grades</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">Quality & Testing</h3>
                <div className="space-y-3 text-gray-700">
                  <p>– Full Material Traceability & MTC</p>
                  <p>– NDT: MPI / UT / RT as required</p>
                  <p>– Hydrostatic & Pressure Testing</p>
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

ForgedFitting.displayName = "ForgedFitting";

export default ForgedFitting;
