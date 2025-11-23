import { memo, useMemo, useCallback, useEffect, useState } from "react";
import { CheckCircle, Zap, Shield, Award, TrendingUp, Microscope } from "lucide-react";

// === Enhanced Process Card ===
const ProcessCard = memo(({ icon: Icon, title, description, details, index, color = "blue" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  const colorMap = {
    blue: {
      shadow: "hover:shadow-blue-300/40",
      border: "hover:border-blue-400",
      glow: "from-blue-50 to-cyan-50",
      gradient: "from-blue-500 to-cyan-600",
      icon: "text-blue-600",
    },
    cyan: {
      shadow: "hover:shadow-cyan-300/40",
      border: "hover:border-cyan-400",
      glow: "from-cyan-50 to-teal-50",
      gradient: "from-cyan-500 to-teal-600",
      icon: "text-cyan-600",
    },
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border-2 border-gray-200 bg-white shadow-lg hover:shadow-2xl ${colorMap[color].shadow} transition-all duration-500 ${colorMap[color].border} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      style={{ transition: 'all 0.7s ease-out' }}
    >
      {/* Animated Background Glow */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr ${colorMap[color].glow}`} />

      {/* Content */}
      <div className="relative p-6 sm:p-8 space-y-4">
        {/* Icon */}
        <div
          className={`w-14 h-14 bg-gradient-to-br ${colorMap[color].gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          style={{ transitionDelay: `${index * 100 + 300}ms` }}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h4 className={`text-gray-900 font-bold text-lg sm:text-xl group-hover:${color === 'blue' ? 'text-blue-600' : 'text-cyan-600'} transition-colors duration-300`}>
            {title}
          </h4>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Details List */}
        <div className="pt-2 space-y-2">
          {details.map((detail, idx) => (
            <div key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span>{detail}</span>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="pt-4">
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${colorMap[color].gradient} rounded-full transition-all duration-1000 ${isVisible ? 'w-full' : 'w-0'
                }`}
              style={{ transitionDelay: `${index * 100 + 500}ms` }}
            />
          </div>
        </div>
      </div>

      {/* Shine Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none bg-gradient-to-br from-transparent via-white/10 to-transparent"
        style={{
          backgroundSize: "200% 200%",
          animation: "shine 3s infinite"
        }}
      />
    </div>
  );
});

ProcessCard.displayName = "ProcessCard";

// === Certification Badge Component ===
const CertificationBadge = memo(({ icon: Icon, text, color, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`group flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-br ${color} border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
      style={{ transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
    >
      <div className="w-10 h-10 bg-white/80 rounded-xl flex items-center justify-center group-hover:bg-white transition-colors duration-300 shadow-sm">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <span className="text-gray-800 font-semibold text-sm sm:text-base">{text}</span>
    </div>
  );
});

CertificationBadge.displayName = "CertificationBadge";

// === Blur Text Component ===
const BlurText = memo(({ text, className, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <h1
      className={`${className} transition-all duration-1000 ${isVisible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-4'
        }`}
    >
      <span className="bg-gray-900 bg-clip-text text-transparent animate-gradient-x">
        {text}
      </span>
    </h1>
  );
});

BlurText.displayName = "BlurText";

const QualityControl = memo(() => {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  const inspectionProcesses = useMemo(
    () => [
      {
        icon: Microscope,
        title: "Material Testing",
        description: "Comprehensive material analysis and verification",
        details: [
          "Spectroscopic analysis",
          "Chemical composition verification",
          "Hardness testing (HRC/HV)",
          "Tensile strength analysis"
        ],
        color: "blue"
      },
      {
        icon: CheckCircle,
        title: "Dimensional Inspection",
        description: "Precision measurement of all components",
        details: [
          "CMM (Coordinate Measuring Machine)",
          "Digital calipers & micrometers",
          "Bore & thread inspection",
          "Surface finish verification"
        ],
        color: "cyan"
      },
      {
        icon: Shield,
        title: "NDT (Non-Destructive Testing)",
        description: "Advanced testing without component damage",
        details: [
          "Ultrasonic testing",
          "Magnetic particle inspection",
          "Radiography (X-ray)",
          "Eddy current testing"
        ],
        color: "blue"
      },
      {
        icon: TrendingUp,
        title: "Pressure & Performance",
        description: "Functional testing under actual conditions",
        details: [
          "Hydrostatic pressure testing",
          "Leak detection",
          "Load performance verification",
          "Temperature cycling tests"
        ],
        color: "cyan"
      },
      {
        icon: Award,
        title: "Documentation & Certification",
        description: "Complete traceability and compliance records",
        details: [
          "Material test certificates",
          "Inspection reports",
          "Third-party verification",
          "ISO compliance documentation"
        ],
        color: "blue"
      },
      {
        icon: Zap,
        title: "Final Quality Approval",
        description: "Rigorous final inspection before delivery",
        details: [
          "Final visual inspection",
          "Packaging inspection",
          "Shipment verification",
          "Customer specifications check"
        ],
        color: "cyan"
      }
    ],
    []
  );

  const certifications = useMemo(
    () => [
      { name: "ISO 9001", icon: Award },
      { name: "ASME Certified", icon: Shield },
      { name: "API Approved", icon: CheckCircle },
      { name: "ISO 17025 LAB", icon: Microscope }
    ],
    []
  );

  const handleImageError = useCallback((event) => {
    event.currentTarget.src = "https://source.unsplash.com/1600x1066/?quality,testing";
  }, []);

  return (
    <div className="relative bg-neutral-50 text-gray-900 min-h-screen">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-6 sm:space-y-8">
            <BlurText
              text="Quality Control & Assurance"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              delay={120}
            />
            <p
              className={`text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              style={{ transitionDelay: '300ms' }}
            >
              Rigorous testing, precision measurement, and comprehensive inspections ensure every component meets the highest international standards. Our quality-first approach guarantees reliability in every delivery.
            </p>

            {/* Certification Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              <CertificationBadge
                icon={Award}
                text="ISO 9001 Certified"
                color="from-blue-50 to-blue-100"
                delay={0.5}
              />
              <CertificationBadge
                icon={Shield}
                text="ASME Approved"
                color="from-cyan-50 to-cyan-100"
                delay={0.6}
              />
              <CertificationBadge
                icon={CheckCircle}
                text="API Compliant"
                color="from-blue-50 to-cyan-100"
                delay={0.7}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
              <a
                href="#processes"
                className="px-6 sm:px-8 py-3 sm:py-4 text-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Explore Our Process
              </a>
              <a
                href="#standards"
                className="px-6 sm:px-8 py-3 sm:py-4 text-center rounded-full border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 text-gray-700 hover:text-blue-700 font-medium transition-all duration-300"
              >
                View Standards
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Processes Section */}
      <section id="processes" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Our Testing & Inspection Processes
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Multi‑stage quality verification ensures every forged component and flange meets exacting specifications before delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {inspectionProcesses.map((process, index) => (
              <ProcessCard
                key={process.title}
                icon={process.icon}
                title={process.title}
                description={process.description}
                details={process.details}
                index={index}
                color={process.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Certifications Section */}
      <section id="standards" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-cyan-50/30 to-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Industry Certifications & Standards
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Compliance with global quality management and product safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-3xl border-2 border-gray-200 bg-white shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Quality Management Systems</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>ISO 9001:2015 Quality Management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>ISO 17025 Laboratory Accreditation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>ISO 45001 Occupational Health & Safety</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border-2 border-gray-200 bg-white shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Product Standards</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>ASME B16.5 Flange Standards</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>API 6A Wellhead Equipment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>ASTM Material Specifications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 p-8 sm:p-10 lg:p-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-gray-900">
                  Quality Assured Every Step
                </h3>
                <p className="text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed">
                  From raw material verification to final inspection, we maintain rigorous quality standards. Every product is tested and certified for performance and compliance.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact-us"
                  className="px-8 py-4 text-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Request Quality Report
                </a>
                <a
                  href="#"
                  className="px-8 py-4 text-center rounded-full border-2 border-blue-400 text-blue-700 hover:bg-blue-50 hover:border-blue-500 font-medium transition-all duration-300"
                >
                  Download Certifications
                </a>
              </div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-200/40 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* Footer Space */}
      <div className="h-16 sm:h-20" />

      {/* Animations */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: 0% 50%;
          }
          50% {
            background-size: 200% 200%;
            background-position: 100% 50%;
          }
        }

        @keyframes shine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
});

QualityControl.displayName = "QualityControl";

export default QualityControl;
