import { memo, useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import BlurText from "../../Components/utils/BlurText.jsx";
import Particles from "../../Components/utils/Particles.jsx";
import { fadeIn, cardVariants } from "../../constants/animations";

const Financials = memo(() => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedQuarter, setSelectedQuarter] = useState("Q4");
  const [selectedReport, setSelectedReport] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const staggerContainer = useMemo(() => ({
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }), []);

  const financialData = useMemo(() => ({
    2024: {
      Q1: {
        revenue: "₹58.2 Cr",
        profit: "₹10.8 Cr",
        growth: "+12.5%",
        margin: "18.6%",
      },
      Q2: {
        revenue: "₹62.1 Cr",
        profit: "₹11.9 Cr",
        growth: "+15.2%",
        margin: "19.2%",
      },
      Q3: {
        revenue: "₹65.8 Cr",
        profit: "₹12.7 Cr",
        growth: "+18.1%",
        margin: "19.3%",
      },
      Q4: {
        revenue: "₹68.9 Cr",
        profit: "₹13.6 Cr",
        growth: "+20.3%",
        margin: "19.7%",
      },
    },
    2023: {
      Q1: {
        revenue: "₹51.7 Cr",
        profit: "₹9.2 Cr",
        growth: "+8.3%",
        margin: "17.8%",
      },
      Q2: {
        revenue: "₹53.9 Cr",
        profit: "₹9.8 Cr",
        growth: "+10.1%",
        margin: "18.2%",
      },
      Q3: {
        revenue: "₹55.7 Cr",
        profit: "₹10.3 Cr",
        growth: "+11.2%",
        margin: "18.5%",
      },
      Q4: {
        revenue: "₹57.3 Cr",
        profit: "₹10.9 Cr",
        growth: "+12.8%",
        margin: "19.0%",
      },
    },
    2022: {
      Q1: {
        revenue: "₹47.6 Cr",
        profit: "₹8.1 Cr",
        growth: "+6.8%",
        margin: "17.0%",
      },
      Q2: {
        revenue: "₹49.2 Cr",
        profit: "₹8.5 Cr",
        growth: "+7.2%",
        margin: "17.3%",
      },
      Q3: {
        revenue: "₹50.8 Cr",
        profit: "₹8.9 Cr",
        growth: "+7.8%",
        margin: "17.5%",
      },
      Q4: {
        revenue: "₹52.4 Cr",
        profit: "₹9.3 Cr",
        growth: "+8.5%",
        margin: "17.7%",
      },
    },
  }), []);

  const annualData = useMemo(() => [
    {
      year: "2024",
      revenue: "₹255.0 Cr",
      profit: "₹49.0 Cr",
      growth: "+16.5%",
      margin: "19.2%",
      assets: "₹320.0 Cr",
    },
    {
      year: "2023",
      revenue: "₹218.6 Cr",
      profit: "₹40.2 Cr",
      growth: "+12.8%",
      margin: "18.4%",
      assets: "₹285.0 Cr",
    },
    {
      year: "2022",
      revenue: "₹194.0 Cr",
      profit: "₹34.1 Cr",
      growth: "+9.5%",
      margin: "17.6%",
      assets: "₹252.0 Cr",
    },
    {
      year: "2021",
      revenue: "₹177.1 Cr",
      profit: "₹29.8 Cr",
      growth: "+7.2%",
      margin: "16.8%",
      assets: "₹160.0 Cr",
    },
  ], []);

  const keyRatios = useMemo(() => [
    {
      metric: "Current Ratio",
      value: "2.1",
      change: "+0.2",
      status: "Good",
      description: "Measures ability to pay short-term obligations",
    },
    {
      metric: "Debt-to-Equity",
      value: "0.35",
      change: "-0.05",
      status: "Excellent",
      description: "Lower ratio indicates less financial risk",
    },
    {
      metric: "ROE",
      value: "22.3%",
      change: "+3.1%",
      status: "Excellent",
      description: "Return on shareholder equity",
    },
    {
      metric: "ROA",
      value: "15.8%",
      change: "+2.2%",
      status: "Excellent",
      description: "Return on total assets",
    },
    {
      metric: "Asset Turnover",
      value: "1.8",
      change: "+0.1",
      status: "Good",
      description: "Efficiency of asset utilization",
    },
    {
      metric: "Inventory Turnover",
      value: "12.5",
      change: "+1.2",
      status: "Excellent",
      description: "How quickly inventory is sold",
    },
  ], []);

  const financialReports = useMemo(() => [
    {
      title: "Annual Report 2023-24",
      type: "Annual",
      date: "2024-05-15",
      size: "8.5 MB",
      description: "Comprehensive annual report...",
      category: "Corporate",
    },
    {
      title: "Q4 FY24 Results",
      type: "Quarterly",
      date: "2024-02-28",
      size: "2.1 MB",
      description: "Fourth quarter financial results...",
      category: "Performance",
    },
    {
      title: "Q3 FY24 Results",
      type: "Quarterly",
      date: "2024-01-15",
      size: "2.0 MB",
      description: "Third quarter financial results...",
      category: "Performance",
    },
  ], []);

  const handleReportDownload = useCallback(async (year, quarter, type) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setSelectedReport(null);
  }, [setIsLoading, setSelectedReport]);

  return (
    <div className="relative bg-neutral-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden section-padding">
        <Particles
          className="absolute inset-0 -z-10"
          particleCount={300}
          particleSpread={10}
          speed={0.12}
          particleColors={["#60a5fa", "#38bdf8", "#93c5fd"]}
          moveParticlesOnHover
          particleHoverFactor={0.8}
          alphaParticles
          particleBaseSize={120}
          sizeRandomness={1.2}
          cameraDistance={26}
        />
        <div className="container-responsive space-y-6 text-center">
          <BlurText
            text="Financial Reports"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-[0_6px_30px_rgba(56,189,248,0.35)]"
            delay={120}
          />
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-responsive-body max-w-3xl text-neutral-300"
          >
            Comprehensive quarterly and annual data, key ratios, and
            downloadable reports.
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="container-responsive section-padding space-responsive">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="space-responsive"
        >
          <div className="flex flex-col md:flex-row justify-center mt-[-80px] gap-4 mb-8">
            {Object.keys(financialData).map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-full ${
                  selectedYear === year
                    ? "bg-sky-500 text-white"
                    : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                }`}
              >
                {year}
              </button>
            ))}
            {Object.keys(financialData[selectedYear]).map((quarter) => (
              <button
                key={quarter}
                onClick={() => setSelectedQuarter(quarter)}
                className={`px-4 py-2 rounded-full ${
                  selectedQuarter === quarter
                    ? "bg-cyan-500 text-white"
                    : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                }`}
              >
                {quarter}
              </button>
            ))}
          </div>

          <motion.div
            className="grid-responsive"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {Object.entries(financialData[selectedYear][selectedQuarter]).map(
              ([key, value]) => (
                <motion.div
                  key={key}
                  variants={cardVariants}
                  className="rounded-2xl border border-white/20 bg-gradient-to-br from-neutral-800/80 to-neutral-900/80  p-6 text-center hover:border-sky-400/50 shadow-lg"
                >
                  <h3 className="text-lg font-medium capitalize">{key}</h3>
                  <p className="text-3xl font-bold text-sky-400">{value}</p>
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* Annual Data */}
      <section className="container-responsive section-padding space-responsive">
        <BlurText
          text="Annual Performance"
          className="text-3xl sm:text-4xl md:text-5xl font-bold mt-[-60px]"
        />
        <div className="grid-responsive">
          {annualData.map((data, i) => (
            <motion.div
              key={data.year}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/20 bg-gradient-to-br from-neutral-800/80 to-neutral-900/80  p-6 hover:border-cyan-400/50"
            >
              <h4 className="text-xl font-semibold text-sky-400">
                {data.year}
              </h4>
              <div className="mt-2 text-sm space-y-1">
                <div>Revenue: {data.revenue}</div>
                <div>Profit: {data.profit}</div>
                <div>Growth: {data.growth}</div>
                <div>Margin: {data.margin}</div>
                <div>Assets: {data.assets}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Ratios */}
      <section className="container-responsive section-padding space-responsive">
        <BlurText
          text="Key Financial Ratios"
          className="text-3xl sm:text-4xl md:text-5xl font-bold mt-[-60px] "
        />
        <div className="grid-responsive">
          {keyRatios.map((ratio, i) => (
            <motion.div
              key={ratio.metric}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/20 bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 p-6 hover:border-sky-400/50"
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-lg font-medium">{ratio.metric}</h4>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    ratio.status === "Excellent"
                      ? "bg-green-500/20 text-green-400"
                      : ratio.status === "Good"
                      ? "bg-sky-500/20 text-sky-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {ratio.status}
                </span>
              </div>
              <p className="text-2xl font-bold text-sky-400">{ratio.value}</p>
              <p className="text-sm text-neutral-400">Change: {ratio.change}</p>
              <p className="text-xs text-neutral-500 mt-2">
                {ratio.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reports */}
      <section className="container-responsive section-padding space-responsive">
        <BlurText
          text="Financial Reports"
          className="text-3xl sm:text-4xl md:text-5xl font-bold mt-[-60px]"
        />
        <div className="grid-responsive">
          {financialReports.map((report, i) => (
            <motion.div
              key={report.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/20 bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 p-6 hover:border-cyan-400/50 cursor-pointer"
              onClick={() => setSelectedReport(report)}
            >
              <div className="flex justify-between items-center mb-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    report.type === "Annual"
                      ? "bg-sky-500/20 text-sky-400"
                      : "bg-green-500/20 text-green-400"
                  }`}
                >
                  {report.type}
                </span>
                <span className="text-xs text-neutral-400">{report.size}</span>
              </div>
              <h4 className="font-medium">{report.title}</h4>
              <p className="text-sm text-neutral-400 mt-1">
                {report.description}
              </p>
              <p className="text-xs text-neutral-500 mt-2">{report.date}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedReport && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-neutral-900 rounded-2xl p-6 border border-white/10 max-w-md w-full"
          >
            <h3 className="text-xl font-semibold mb-4">
              {selectedReport.title}
            </h3>
            <div className="space-y-2 text-sm text-neutral-300">
              <div>Type: {selectedReport.type}</div>
              <div>Category: {selectedReport.category}</div>
              <div>Date: {selectedReport.date}</div>
              <div>Size: {selectedReport.size}</div>
              <div>{selectedReport.description}</div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => handleDownload(selectedReport)}
                disabled={isLoading}
                className="flex-1 bg-sky-500 rounded-full py-2 font-medium hover:bg-sky-400 disabled:opacity-50"
              >
                {isLoading ? "Downloading..." : "Download"}
              </button>
              <button
                onClick={() => setSelectedReport(null)}
                className="flex-1 border border-white/20 rounded-full py-2 font-medium hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
});

Financials.displayName = "Financials";

export default Financials;
