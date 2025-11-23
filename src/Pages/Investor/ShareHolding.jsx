import { memo, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Building2, PieChart } from "lucide-react";
import Particles from "../../Components/utils/Particles.jsx";
import BlurText from "../../Components/utils/BlurText.jsx";
// === Reusable BlurText ===
// const BlurText = ({ text, className = "", delay = 0 }) => (
//   <motion.h1
//     initial={{ filter: "blur(10px)", opacity: 0 }}
//     animate={{ filter: "blur(0px)", opacity: 1 }}
//     transition={{ duration: 0.8, delay: delay / 1000 }}
//     className={className}
//   >
//     {text}
//   </motion.h1>
// );

// === Reusable Particles ===
// const Particles = ({
//   className = "",
//   particleCount = 300,
//   particleColors = ["#60a5fa", "#38bdf8", "#93c5fd"],
//   speed = 0.12,
//   particleBaseSize = 120,
// }) => (
//   <div className={`${className} pointer-events-none`}>
//     {Array.from({ length: particleCount }).map((_, i) => (
//       <motion.div
//         key={i}
//         className="absolute rounded-full"
//         style={{
//           background: `radial-gradient(circle, ${particleColors[i % particleColors.length]}, transparent)`,
//           width: `${particleBaseSize}px`,
//           height: `${particleBaseSize}px`,
//           left: `${Math.random() * 100}%`,
//           top: `${Math.random() * 100}%`,
//           opacity: 0.08,
//         }}
//         animate={{
//           x: [0, Math.random() * 100 - 50],
//           y: [0, Math.random() * 100 - 50],
//         }}
//         transition={{
//           duration: 20 / speed,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//       />
//     ))}
//   </div>
// );

// === Enhanced Shareholder Card ===
const ShareholderCard = memo(({ shareholder, index, onImageError }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      delay: index * 0.1,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
    }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-800/90 to-neutral-900/90 shadow-xl hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-500 hover:border-sky-400/50"
  >
    {/* Glow Effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 via-transparent to-blue-500/20" />
    </div>

    {/* Image Container */}
    <div className="relative h-64 sm:h-72 overflow-hidden">
      <motion.img
        src={shareholder.img}
        alt={shareholder.name}
        loading="lazy"
        onError={onImageError}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.7 }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
      
      {/* Floating Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.3 }}
        className="absolute top-4 right-4 px-4 py-2 bg-sky-500/90 backdrop-blur-md rounded-full text-white font-bold text-sm shadow-lg"
      >
        {shareholder.stake}
      </motion.div>
    </div>

    {/* Content */}
    <div className="relative p-6 space-y-3">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="text-white font-bold text-lg group-hover:text-sky-400 transition-colors duration-300">
            {shareholder.name}
          </h4>
          <p className="text-neutral-400 text-sm">Major Stakeholder</p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="pt-3 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-neutral-400">Ownership</span>
          <span className="text-sky-400 font-semibold">{shareholder.stake}</span>
        </div>
        <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: shareholder.stake }}
            transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
            className="h-full bg-gradient-to-r from-sky-500 to-blue-600 rounded-full"
          />
        </div>
      </div>
    </div>

    {/* Shine Effect */}
    <motion.div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%"],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      style={{
        background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
        backgroundSize: "200% 200%",
      }}
    />
  </motion.div>
));

ShareholderCard.displayName = "ShareholderCard";

// === Enhanced Ownership Card ===
const OwnershipCard = memo(({ owner, index, onImageError, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, rotateY: -20, scale: 0.9 }}
    whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      delay: index * 0.15,
      duration: 0.7,
      type: "spring",
      stiffness: 80,
    }}
    whileHover={{ scale: 1.03, rotateY: 5, transition: { duration: 0.3 } }}
    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-800/90 to-neutral-900/90 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:border-cyan-400/50"
  >
    {/* Animated Background */}
    <motion.div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      animate={{
        background: [
          "radial-gradient(circle at 0% 0%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)",
          "radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
          "radial-gradient(circle at 0% 0%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)",
        ],
      }}
      transition={{ duration: 5, repeat: Infinity }}
    />

    {/* Image */}
    <div className="relative h-56 sm:h-64 overflow-hidden">
      <motion.img
        src={owner.img}
        alt={owner.name}
        loading="lazy"
        onError={onImageError}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.15, rotate: 2 }}
        transition={{ duration: 0.7 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
      
      {/* Floating Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
        className="absolute top-4 right-4 w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
      >
        <Icon className="w-7 h-7 text-white" />
      </motion.div>
    </div>

    {/* Content */}
    <div className="relative p-6 space-y-4">
      <h4 className="text-white font-bold text-xl group-hover:text-cyan-400 transition-colors duration-300">
        {owner.name}
      </h4>
      
      {/* Percentage Circle */}
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-neutral-400 text-sm mb-2">Stake Percentage</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {owner.stake.replace('%', '')}
            </span>
            <span className="text-2xl text-cyan-400">%</span>
          </div>
        </div>
        
        {/* Mini Chart Visual */}
        <div className="relative w-20 h-20">
          <svg className="transform -rotate-90 w-20 h-20">
            <circle
              cx="40"
              cy="40"
              r="32"
              stroke="currentColor"
              strokeWidth="6"
              fill="none"
              className="text-neutral-800"
            />
            <motion.circle
              cx="40"
              cy="40"
              r="32"
              stroke="url(#gradient)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              initial={{ strokeDasharray: "0 201" }}
              whileInView={{ 
                strokeDasharray: `${(parseInt(owner.stake) / 100) * 201} 201` 
              }}
              transition={{ delay: index * 0.15 + 0.5, duration: 1.5 }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>

    {/* Corner Accent */}
    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
));

OwnershipCard.displayName = "OwnershipCard";

// === Animations ===
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Shareholding = memo(() => {
  const majorShareholders = useMemo(
    () => [
      {
        name: "John Smith",
        stake: "35%",
        img: "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=",
      },
      {
        name: "Global Investments Ltd.",
        stake: "25%",
        img: "https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=",
      },
      {
        name: "Mary Johnson",
        stake: "15%",
        img: "https://media.istockphoto.com/id/1915382108/photo/smiling-friendly-confident-millennial-caucasian-lady-manager-teacher-in-formal-wear-with.jpg?s=612x612&w=0&k=20&c=TkrRP273eXURjstyDZHFH4lkrE6OFmVJ9ZCrgLoPfIw=",
      },
      {
        name: "Institutional Fund A",
        stake: "10%",
        img: "https://media.istockphoto.com/id/1312550959/photo/the-city-of-london-skyline-at-night-united-kingdom.jpg?s=612x612&w=0&k=20&c=Ro-QI9Khk3I9ILVW4hBc26NEmIViFRGveaqVuvWeVJs=",
      },
      {
        name: "Other Investors",
        stake: "15%",
        img: "https://media.istockphoto.com/id/1460172015/photo/businessmen-making-handshake-with-partner-greeting-dealing-merger-and-acquisition-business.jpg?s=612x612&w=0&k=20&c=IyQrIahedSW3WKsHSNsqtvX8dnzI1augnrtRrVeN3Dw=",
      },
    ],
    []
  );

  const ownershipStructure = useMemo(
    () => [
      {
        name: "Promoters",
        stake: "50%",
        img: "https://media.istockphoto.com/id/1424006543/photo/smartphone-blank-screen-with-empty-space-for-mobile-app-on-screen-on-hand-cheerful-asian-woman.jpg?s=612x612&w=0&k=20&c=nGKBzjcg41TP5Yq40rrjWNYJ4ATFL5rftb6JojPJBWA=",
        icon: Users,
      },
      {
        name: "Institutional Investors",
        stake: "35%",
        img: "https://media.istockphoto.com/id/1047549798/photo/indian-team-working-together-and-looking-on-a-screen-of-laptop.jpg?s=612x612&w=0&k=20&c=gJqsl_4VH3es693-7_-Bdx0v-2Mj_QBAheuFPxrBAdA=",
        icon: Building2,
      },
      {
        name: "Public Shareholding",
        stake: "15%",
        img: "https://media.istockphoto.com/id/513439341/photo/portrait-of-enthusiastic-business-people-in-circle.jpg?s=612x612&w=0&k=20&c=oxwsq8WGFT0ixmSojntYBEZqifne4P7DlqOWbXCqWUk=",
        icon: PieChart,
      },
    ],
    []
  );

  const handleImageError = useCallback((event) => {
    event.currentTarget.src = "https://source.unsplash.com/1600x1066/?business,corporate";
  }, []);

  return (
    <div className="relative bg-neutral-950 text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        <Particles className="absolute inset-0 -z-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-6 sm:space-y-8">
            <BlurText
              text="Shareholding Information"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-[0_6px_30px_rgba(56,189,248,0.35)]"
              delay={120}
            />
            <motion.p
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed"
            >
              Transparent and up-to-date shareholding structure for stakeholders
              and investors. Explore our major shareholders and ownership
              distribution.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Major Shareholders */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Major Shareholders
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto">
              The following highlights our largest individual and institutional stakeholders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
            {majorShareholders.map((shareholder, index) => (
              <ShareholderCard
                key={shareholder.name}
                shareholder={shareholder}
                index={index}
                onImageError={handleImageError}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Ownership Structure */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Ownership Structure
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto">
              Our shareholding is diversified across promoters, institutions, and public investors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {ownershipStructure.map((owner, index) => (
              <OwnershipCard
                key={owner.name}
                owner={owner}
                index={index}
                icon={owner.icon}
                onImageError={handleImageError}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-sky-600/20 via-blue-600/10 to-cyan-500/10 p-8 sm:p-10 lg:p-12 shadow-2xl"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Want detailed investor reports?
                </h3>
                <p className="text-base sm:text-lg text-white/80 max-w-2xl">
                  Download our latest shareholding pattern and annual investor report for in-depth insights.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 text-center rounded-full bg-white text-neutral-900 font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Contact IR Team
                </a>
                <a
                  href="#"
                  className="px-8 py-4 text-center rounded-full border-2 border-white/20 text-white/90 hover:bg-white/10 transition-all duration-300"
                >
                  Download Report
                </a>
              </div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Footer Space */}
      <div className="h-16 sm:h-20" />
    </div>
  );
});

Shareholding.displayName = "Shareholding";

export default Shareholding;