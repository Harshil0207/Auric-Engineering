import { memo, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Particles from "../../Components/utils/Particles.jsx";
import BlurText from "../../Components/utils/BlurText.jsx";
import { fadeIn, cardVariants, imageContainerVariants } from "../../constants/animations";

const Investor = memo(() => {
  const [selectedMetric, setSelectedMetric] = useState(null);

  const quickLinks = useMemo(
    () => [
      { path: "/investor/financials", label: "Financial Reports", icon: "📊" },
      { path: "/investor/committees", label: "Board Committees", icon: "👥" },
      {
        path: "/investor/shareholding",
        label: "Shareholding Info",
        icon: "📋",
      },
    ],
    []
  );

  const companyOverview = useMemo(
    () => ({
      overview: {
        description:
          "Leading manufacturer of precision forged products with a strong market presence and consistent growth trajectory.",
        founded: "1995",
        employees: "450+",
        locations: "3",
        markets: "Global",
      },
      financials: {
        revenue: "₹250 Cr",
        growth: "+15%",
        profit: "₹45 Cr",
        margin: "18%",
      },
      operations: {
        capacity: "50,000 units/month",
        utilization: "85%",
        exports: "40%",
        certifications: "4",
      },
    }),
    []
  );

  const keyMetrics = useMemo(
    () => [
      { label: "Market Cap", value: "₹1,200 Cr", change: "+12%", trend: "up" },
      { label: "Revenue Growth", value: "15.2%", change: "+2.1%", trend: "up" },
      { label: "Profit Margin", value: "18.5%", change: "+1.2%", trend: "up" },
      { label: "ROE", value: "22.3%", change: "+3.1%", trend: "up" },
      { label: "Debt Ratio", value: "0.35", change: "-0.05", trend: "down" },
      { label: "Current Ratio", value: "2.1", change: "+0.2%", trend: "up" },
    ],
    []
  );

  const investorHighlights = useMemo(
    () => [
      {
        title: "Strong Financial Performance",
        description:
          "Consistent revenue growth and improving profitability margins",
        icon: "📈",
        color: "from-green-500 to-emerald-500",
      },
      {
        title: "Market Leadership",
        description:
          "Leading position in forged products segment with expanding market share",
        icon: "🏆",
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "Operational Excellence",
        description:
          "High capacity utilization and efficient production processes",
        icon: "⚙️",
        color: "from-purple-500 to-pink-500",
      },
      {
        title: "Global Expansion",
        description: "Growing international presence and export markets",
        icon: "🌍",
        color: "from-orange-500 to-red-500",
      },
    ],
    []
  );

  return (
    <div className="relative bg-neutral-950 text-white">
      <section className="relative overflow-hidden section-padding">
        <Particles
          className="absolute inset-0 -z-10"
          particleCount={250}
          particleSpread={10}
          speed={0.1}
          particleColors={["#a78bfa", "#f472b6", "#f9a8d4"]}
          moveParticlesOnHover
          particleHoverFactor={0.8}
          alphaParticles
          particleBaseSize={120}
          sizeRandomness={1.2}
          cameraDistance={26}
        />
        <div className="container-responsive space-y-8 text-center">
          <BlurText
            text="Investor Relations"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-[0_6px_30px_rgba(192,132,252,0.35)]"
            delay={120}
          />
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-responsive-body max-w-3xl text-neutral-300 "
          >
            Transparent communication and strong financial performance for
            sustainable shareholder value creation and long-term growth.
          </motion.p>
        </div>
      </section>

      <section className="container-responsive section-padding space-responsive ">
        <div className="grid gap-8 md:grid-cols-3">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.path}
              custom={index}
              variants={imageContainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="card-responsive shadow-responsive  bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-white/10 hover:border-purple-400/50 transition-all duration-500"
            >
              <Link to={link.path} className="block">
                <div className="text-4xl mb-4">{link.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {link.label}
                </h3>
                <div className="text-purple-300 font-medium">Learn More →</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container-responsive section-padding space-responsive -mt-18">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-responsive"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Company Overview
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {Object.entries(companyOverview).map(([sectionKey, data], i) => (
              <motion.div
                key={sectionKey}
                custom={i}
                variants={imageContainerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="card-responsive shadow-responsive bg-gradient-to-br mt-10 from-neutral-900 to-neutral-800/60 border border-white/10 p-6"
              >
                <h3 className="text-xl font-bold mb-4 capitalize">
                  {sectionKey}
                </h3>
                <div className="space-y-3 text-neutral-300">
                  {Object.entries(data).map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="capitalize">{k}:</span>
                      <span className="font-semibold">{v}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="container-responsive section-padding space-responsive -mt-18">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-responsive"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Key Financial Metrics
          </h2>
          <div className="grid gap-8 md:grid-cols-3 mt-10">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                custom={index}
                variants={imageContainerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="card-responsive shadow-responsive bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-white/10 p-6 cursor-pointer"
                onClick={() => setSelectedMetric(metric)}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">{metric.label}</h3>
                  <span
                    className={
                      metric.trend === "up" ? "text-green-400" : "text-red-400"
                    }
                  >
                    {metric.trend === "up" ? "↗" : "↘"}
                  </span>
                </div>
                <div className="text-3xl font-bold text-purple-300 mb-2">
                  {metric.value}
                </div>
                <div
                  className={
                    metric.trend === "up" ? "text-green-400" : "text-red-400"
                  }
                >
                  {metric.change} vs previous
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="container-responsive section-padding space-responsive -mt-18">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-responsive"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Investment Highlights
          </h2>
          <div className="grid gap-8 md:grid-cols-3 mt-10">
            {investorHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                custom={index}
                variants={imageContainerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="card-responsive shadow-responsive bg-gradient-to-br from-neutral-900 to-neutral-800/60 border border-white/10 p-6"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-xl flex items-center justify-center text-2xl text-white`}
                  >
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-neutral-300">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="container-responsive">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-3xl mt-[-60px] border border-white/10 bg-gradient-to-br from-purple-600/20 to-pink-500/10 p-responsive shadow-responsive"
          >
            <div className="flex-responsive items-center gap-responsive">
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Ready to Invest in Excellence?
                </h3>
                <p className="mt-2 text-responsive-body text-white/80 max-w-2xl">
                  Explore our detailed financial reports and corporate
                  governance information.
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  to="/investor/financials"
                  className="btn-responsive touch-target rounded-full bg-white text-neutral-900 font-semibold hover:opacity-90 animate-responsive"
                >
                  View Financial Reports
                </Link>
                <Link
                  to="/contact-us"
                  className="btn-responsive touch-target rounded-full border border-white/20 text-white/90 hover:bg-white/10 animate-responsive"
                >
                  Contact IR Team
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedMetric && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              className="bg-white rounded-xl max-w-md w-full p-6 text-black"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  {selectedMetric.label}
                </h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">
                  {selectedMetric.value}
                </div>
                <div
                  className={
                    selectedMetric.trend === "up"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {selectedMetric.change} vs previous
                </div>
                <button
                  onClick={() => setSelectedMetric(null)}
                  className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
});

Investor.displayName = "Investor";

export default Investor;
