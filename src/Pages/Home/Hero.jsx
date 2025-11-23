import { memo, useCallback, useMemo, useState, useEffect } from "react";
import { ChevronRight, Zap, Shield, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React from 'react';

export const withMemo = (Component, propsAreEqual) => {
  const MemoizedComponent = memo(Component, propsAreEqual);
  MemoizedComponent.displayName = Component.name;
  return MemoizedComponent;
};

const ParticleBackground = withMemo(({ particleCount }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(particleCount)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
});

const FeatureCard = withMemo(({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: delay / 1000, duration: 0.6 }}
    viewport={{ once: true }}
    className="group relative bg-white backdrop-blur-md border border-gray-200 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
    <div className="relative z-10">
      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
));

const StatCard = withMemo(({ value, label, suffix = "+" }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-center"
  >
    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-900 to-blue-500 bg-clip-text text-transparent mb-2">
      {value}{suffix}
    </div>
    <div className="text-neutral-900 text-sm uppercase tracking-wider">{label}</div>
  </motion.div>
));

const Video = withMemo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [particleCount, setParticleCount] = useState(20);
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setParticleCount(window.innerWidth < 768 ? 12 : 20);
    }
    setIsVisible(true);
  }, []);

  const handleManufactureClick = useCallback(() => {
    navigate("/manufacture");
  }, [navigate]);

  const handleViewProductsClick = useCallback(() => {
    navigate("/products/slip-on");
  }, [navigate]);

  const features = useMemo(() => [
    { icon: Zap, title: "Premium Quality", description: "ISO-certified manufacturing with rigorous quality control." },
    { icon: Shield, title: "Reliable Solutions", description: "Trusted by industry leaders for durability and consistency." },
    { icon: Award, title: "Custom Engineering", description: "Tailored solutions built to meet your unique industrial needs." }
  ], []);

  return (
    <div className="relative min-h-screen bg-neutral-50 text-neutral-900 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-100/60 via-neutral-50 to-neutral-50 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent pointer-events-none" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <ParticleBackground particleCount={particleCount} />

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full " />
              Leading Manufacturer in India
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-gray-800 mb-2">Auric</span>
              <span className="block bg-gradient-to-r from-cyan-900 via-blue-600 to-blue-300 bg-clip-text text-transparent p-1">Engineering</span>
            </h1>

            <p className="text-lg text-neutral-900 leading-relaxed max-w-xl">
              Leading manufacturer and supplier of premium flanges, buttwelded fittings, and forged fittings. Delivering excellence from Rajkot, India to the world.
            </p>

            <div className="flex flex-wrap gap-3">
              {["ISO Certified", "Custom Solutions", "Global Delivery"].map((item, idx) => (
                <div key={idx} className="px-4 py-2 bg-cyan-900 border border-neutral-800 rounded-full text-sm text-neutral-100 hover:border-cyan-500/50 transition-colors duration-300">
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={handleManufactureClick}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={handleViewProductsClick}
                className="px-8 py-4 bg-neutral-900/60 border border-neutral-700 rounded-full font-semibold text-white hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-2"
              >
                View Products
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Glowing Background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl animate-pulse" />

            {/* Image Container */}
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 z-10" />

              {/* Main Image */}
              <img
                src="https://ritecheng.com/wp-content/uploads/2021/03/pipelines-and-industrial-services.jpg"
                alt="Industrial Manufacturing"
                className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
              />

              {/* Bottom Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent z-10" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 rounded-full text-xs text-cyan-300 font-medium mb-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full " />
                  Live Production
                </div>
                <h3 className="text-white text-xl font-semibold">Industrial Manufacturing</h3>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 lg:mt-32">
          <StatCard value="25" label="Years Experience" />
          <StatCard value="500" label="Happy Clients" />
          <StatCard value="1000" label="Projects Done" suffix="+" />
          <StatCard value="99" label="Success Rate" suffix="%" />
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="bg-gradient-to-r from-cyan-900 to-blue-500 bg-clip-text text-transparent">Auric</span>
          </h2>
          <p className="text-neutral-800 text-lg max-w-2xl mx-auto">
            Experience the difference of working with industry-leading experts
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} delay={900 + idx * 100} />
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          25% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
          50% { transform: translateY(-40px) translateX(-10px); opacity: 0.3; }
          75% { transform: translateY(-20px) translateX(5px); opacity: 0.6; }
        }
        .animate-float { animation: float linear infinite; }
      `}</style>
    </div>
  );
});

Video.displayName = "Video";
export default Video;