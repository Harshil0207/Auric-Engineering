import { memo, useState, useEffect, useCallback } from "react";
import { CheckCircle2, Award, Shield, Target, Zap, FileCheck, Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BlurText from "../../Components/utils/BlurText.jsx";
import Particles from "../../Components/utils/Particles.jsx";
import { fadeIn, cardVariants, imageContainerVariants } from "../../constants/animations.js";
import { motion } from "framer-motion";

const ParticleBackground = memo(() => {
  const particleCount = window.innerWidth < 768 ? 15 : 25;


  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(particleCount)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${15 + Math.random() * 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
});

ParticleBackground.displayName = "ParticleBackground";

const FeatureCard = memo(({ icon: Icon, title, description, delay }) => (
  <div
    className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-xl transition-all duration-500"
    style={{
      animation: 'fadeInUp 0.8s ease-out forwards',
      animationDelay: `${delay}ms`,
      opacity: 0
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
    <div className="relative">
      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
));

FeatureCard.displayName = "FeatureCard";

const StandardBadge = memo(({ text }) => (
  <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs text-blue-700 font-medium hover:bg-blue-100 hover:border-blue-300 transition-colors duration-300">
    {text}
  </span>
));
StandardBadge.displayName = "StandardBadge";

const AboutUs = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactUsClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const advantages = [
    {
      icon: Award,
      title: "Quality of the Product",
      description: "We ensure that the quality standards are met. As per customers requirement, we supply products of standard quality after going through various checking, testing, inspection & certification process."
    },
    {
      icon: Shield,
      title: "Quality Raw Materials",
      description: "All material used for manufacturing of fittings are tested for chemical & mechanical properties. They are identified & fully traceable from raw material stage to final product."
    },
    {
      icon: Target,
      title: "Checks & Controls",
      description: "The system controls the quality of all incoming materials as per the raw material test certificate. Randomly checking in each size for chemical and physical properties at Government approved laboratory."
    },
    {
      icon: Zap,
      title: "Testing & Inspection",
      description: "Auric maintains strict dimensional standards by inspecting and testing equipment with strict adherence to the quality manual. All finished material is inspected for quality after the first piece of production."
    },
    {
      icon: Factory,
      title: "Leading Supplier",
      description: "As ISO 9001:2015 Certified Company, we are the leading manufacturer and suppliers of all types of high quality Stainless Steel, Pipe Fittings, Butt weld and Forged Fittings and Flanges."
    },
    {
      icon: FileCheck,
      title: "Certification",
      description: "Fittings are supplied with test certificates as approved QAP which includes chemical composition, mechanical properties, hardness details of heat treatment and stamping details."
    }
  ];

  const materialStandards = [
    "ASTM A105", "ASTM A182", "ASTM A350", "ASTM A694", "ASTM A516"
  ];

  const manufacturingStandards = [
    "ASME B16.5", "ASME B16.47", "ASME B16.36"
  ];

  return (
    <div className="relative bg-neutral-50 text-white min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-neutral-950 to-neutral-950" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative overflow-hidden section-padding">
        <Particles
          className="absolute inset-0 -z-10"
          particleCount={250}
          particleSpread={8}
          speed={0.1}
          particleColors={["#10b981", "#059669", "#047857"]}
          moveParticlesOnHover
          particleHoverFactor={0.6}
          alphaParticles
          particleBaseSize={100}
          sizeRandomness={1.0}
          cameraDistance={24}
        />

        <div className="container-responsive space-y-6 -mt-25">
          <BlurText
            text="About Us"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 drop-shadow-[0_6px_30px_rgba(16,185,129,0.35)]"
            delay={120}
          />
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-responsive-body max-w-3xl text-gray-900"
          >
            Auric Engineering, the company is concentrating on piping solutions for industrial companies. We are located in India, equipped with multi-base inventory and manufacturing facilities in Rajkot India.
          </motion.p>
        </div>
      </section>


      {/* Main Content Section */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Company Overview */}
        <div className={`max-w-6xl mx-auto mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Leading Manufacturing Company
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Auric Engineering, the company is concentrating on piping solutions for industrial companies. We are located in India, equipped with multi-base inventory and manufacturing facilities in Rajkot India.
                  </p>
                  <p>
                    We have large in-stock of different material with carbon, alloy, and stainless steel flange and raw material flange plate, which means we can manufacture your specific requirements in the urgent period.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200/40 to-cyan-200/40 rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200 shadow-lg">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <Factory className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-semibold mb-2">Smart Technology</h3>
                        <p className="text-gray-600 text-sm">Using Smart Way to Manufacturing Process</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-semibold mb-2">Industry Leader</h3>
                        <p className="text-gray-600 text-sm">Best & Leading Industrial Supplier</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Standards Section */}
        <div className={`max-w-6xl mx-auto mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industry <span className="bg-gradient-to-r from-blue-900 to-cyan-600 bg-clip-text text-transparent">Standards</span>
            </h2>
            <p className="text-gray-600 text-lg">We comply with international manufacturing and material standards</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-md">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                Material Standards
              </h3>
              <div className="flex flex-wrap gap-2">
                {materialStandards.map((standard, idx) => (
                  <StandardBadge key={idx} text={standard} />
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                  <FileCheck className="w-5 h-5 text-white" />
                </div>
                Manufacturing Standards
              </h3>
              <div className="flex flex-wrap gap-2">
                {manufacturingStandards.map((standard, idx) => (
                  <StandardBadge key={idx} text={standard} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Advantages Section */}
        <div className={`max-w-7xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-900 to-cyan-600 bg-clip-text text-transparent">Advantages</span>
            </h2>
            <p className="text-gray-600 text-lg">Committed to excellence in every aspect of our operations</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, idx) => (
              <FeatureCard key={idx} {...advantage} delay={800 + idx * 100} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`max-w-4xl mx-auto mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-200/50 to-cyan-200/50 rounded-3xl blur-xl" />
            <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 lg:p-12 border border-blue-200 text-center shadow-xl">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Ready to Partner With Us?
              </h3>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
                Experience the Auric difference in quality, reliability, and service excellence
              </p>
              <button
                onClick={handleContactUsClick}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          25% { transform: translateY(-25px) translateX(10px); opacity: 0.5; }
          50% { transform: translateY(-50px) translateX(-10px); opacity: 0.3; }
          75% { transform: translateY(-25px) translateX(5px); opacity: 0.5; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.3s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
});

AboutUs.displayName = "AboutUs";

export default AboutUs;