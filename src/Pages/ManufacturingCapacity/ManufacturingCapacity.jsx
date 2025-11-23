import { memo, useState, useMemo } from "react";
import { motion } from "framer-motion";
import BlurText from "../../Components/utils/BlurText";
import Particles from "../../Components/utils/Particles";
import { fadeIn, cardVariants } from "../../constants/animations";

const PlantFacilities = memo(() => {
  const [activeTab, setActiveTab] = useState("manufacturing");
  const [selectedFacility, setSelectedFacility] = useState(null);

  const facilityData = useMemo(() => ({
    manufacturing: [
      {
        id: 1,
        name: "Main Manufacturing Unit",
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        description:
          "State-of-the-art manufacturing facility with advanced automation systems",
        specs: [
          "Production Capacity: 50,000 units/month",
          "Automation Level: 85%",
          "Quality Control: ISO 9001:2015",
        ],
        area: "25,000 sq ft",
      },
      {
        id: 2,
        name: "Forging Department",
        image:
          "https://media.istockphoto.com/id/1353796808/photo/young-diverse-team-of-automotive-engineers-working-in-office-at-car-factory-industrial.jpg?s=612x612&w=0&k=20&c=QSFNB6lvgP9wRTntzh1xesQ_jJB2OQP42nLPshXuG-Q=",
        description:
          "Specialized forging operations with hydraulic and mechanical presses",
        specs: [
          "Press Capacity: 2000-8000 tons",
          "Temperature Control: ±10°C",
          "Material Handling: Automated",
        ],
        area: "15,000 sq ft",
      },
      {
        id: 3,
        name: "Machining Center",
        image:
          "https://media.istockphoto.com/id/1275786906/photo/smart-industry-robot-arms-for-digital-factory-production-technology.jpg?s=612x612&w=0&k=20&c=XKtjLs564SuaKCXtfRZYyq4A7JD1cGBNhRLYO3PAjbg=",
        description:
          "Precision machining with CNC technology and quality assurance",
        specs: [
          "CNC Machines: 25 units",
          "Tolerance: ±0.01mm",
          "Surface Finish: Ra 0.8",
        ],
        area: "20,000 sq ft",
      },
    ],
    quality: [
      {
        id: 4,
        name: "Quality Control Lab",
        image:
          "https://media.istockphoto.com/id/1329665165/photo/factory-digitalization-with-information-lines-lying-through-the-high-tech-modern-electronics.jpg?s=612x612&w=0&k=20&c=shxeXxata9vvwKwg6RG0J0KII47g-EBcMPlcSkonbY8=",
        description:
          "Advanced testing and inspection facilities for product validation",
        specs: [
          "Testing Equipment: 50+ units",
          "Certification: NABL accredited",
          "Coverage: 100% inspection",
        ],
        area: "8,000 sq ft",
      },
      {
        id: 5,
        name: "Metallurgical Lab",
        image:
          "https://media.istockphoto.com/id/1648830115/video/timelapse-of-fully-automated-pcb-assembly-line-equipped-with-advanced-high-precision-robot.avif?s=640x640&k=20&c=BefEojFa6Ywy4BupJSiQ-DW9IdMCyd8Pvwi8J9N_t_E=",
        description:
          "Material analysis and characterization for quality assurance",
        specs: [
          "Microscopes: 10 units",
          "Spectrometers: 5 units",
          "Testing Standards: ASTM/ISO",
        ],
        area: "5,000 sq ft",
      },
    ],
    storage: [
      {
        id: 6,
        name: "Raw Material Warehouse",
        image:
          "https://media.istockphoto.com/id/990083620/photo/forklift-handling-sugar-bags-for-stuffing-into-container-for-export.jpg?s=612x612&w=0&k=20&c=GdV8ZLDCVGqbDSR2Vxr7oeaNpMnej47F0h_XsDZR6mA=",
        description:
          "Organized storage for raw materials with inventory management",
        specs: [
          "Storage Capacity: 5000 tons",
          "Climate Control: Yes",
          "Security: 24/7 monitoring",
        ],
        area: "30,000 sq ft",
      },
      {
        id: 7,
        name: "Finished Goods Warehouse",
        image:
          "https://media.istockphoto.com/id/464219597/photo/various-sizes-steel-rods-and-iron-profiles-stacked-up.jpg?s=612x612&w=0&k=20&c=J8QLPsms7F3XTEsy9KUM0ERxxTlcgoUpP8msII80iC0=",
        description:
          "Efficient storage and dispatch system for finished products",
        specs: [
          "Storage Capacity: 10,000 units",
          "Loading Bays: 8 units",
          "Dispatch: Same day",
        ],
        area: "35,000 sq ft",
      },
    ],
  }), []);

  const stats = useMemo(() => [
    {
      label: "Total Area",
      value: "138,000 sq ft",
      icon: "🏭",
      description: "Manufacturing footprint",
    },
    {
      label: "Production Lines",
      value: "12",
      icon: "⚙️",
      description: "Active production units",
    },
    {
      label: "Daily Capacity",
      value: "2,000 units",
      icon: "📈",
      description: "Maximum output",
    },
    {
      label: "Employees",
      value: "450+",
      icon: "👥",
      description: "Skilled workforce",
    },
  ], []);

  const equipment = useMemo(() => [
    { name: "CNC Machines", count: "25", category: "Machining" },
    { name: "Forging Presses", count: "8", category: "Forging" },
    { name: "Quality Testing", count: "50+", category: "Inspection" },
    { name: "Material Handling", count: "15", category: "Logistics" },
  ], []);

  return (
    <div className="relative bg-neutral-50 text-gray-900 min-h-screen">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          <BlurText
            text="Manufacturing Capacity"
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
            State-of-the-art manufacturing facilities equipped with cutting-edge
            technology and advanced automation systems for precision engineering
            excellence.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-lg hover:shadow-xl hover:border-blue-400 transition-all duration-300 p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-800 font-semibold mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Tabs */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-blue-50/20">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Tab Buttons */}
          <div className="flex justify-center">
            <div className="bg-white border-2 border-gray-200 rounded-full p-1.5 flex gap-1 shadow-md">
              {Object.keys(facilityData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${activeTab === tab
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Facility Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {facilityData[activeTab].map((facility) => (
              <motion.div
                key={facility.id}
                className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-lg hover:shadow-2xl hover:border-blue-400 transition-all duration-300 cursor-pointer"
                whileHover={{ y: -8 }}
                onClick={() => setSelectedFacility(facility)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white">{facility.name}</h3>
                    <p className="text-sm text-gray-200">{facility.area}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{facility.description}</p>
                  <ul className="space-y-2">
                    {facility.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Equipment & Infrastructure
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
              Advanced machinery and technology for superior manufacturing capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-lg hover:shadow-xl hover:border-blue-400 transition-all duration-300 p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
                  {item.count}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 font-medium">{item.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-gray-200 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={selectedFacility.image}
                alt={selectedFacility.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedFacility.name}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {selectedFacility.description}
              </p>

              {/* Area Badge */}
              <div className="mb-6">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 font-semibold text-sm border border-blue-200">
                  {selectedFacility.area}
                </span>
              </div>

              {/* Specifications */}
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Specifications:</h4>
                {selectedFacility.specs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-700 pb-3 border-b border-gray-200 last:border-b-0"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
});

PlantFacilities.displayName = "PlantFacilities";

export default PlantFacilities;
