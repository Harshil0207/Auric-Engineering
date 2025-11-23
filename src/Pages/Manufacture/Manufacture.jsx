import { memo, useMemo, useCallback, useEffect, useState } from "react";
import { Cog, Settings, Wrench, Shield, Award, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
// === Enhanced Product Card ===
const ProductCard = memo(({ src, index, title, description, onImageError, color = "sky" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  const colorMap = {
    sky: {
      shadow: "hover:shadow-blue-300/40",
      border: "hover:border-blue-400",
      glow: "from-blue-50 to-cyan-50",
      gradient: "from-blue-500 to-cyan-600",
    },
    cyan: {
      shadow: "hover:shadow-cyan-300/40",
      border: "hover:border-cyan-400",
      glow: "from-cyan-50 to-teal-50",
      gradient: "from-cyan-500 to-teal-600",
    },
  };

   
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border-2 border-gray-200 bg-white shadow-lg hover:shadow-2xl ${colorMap[color].shadow} transition-all duration-500 ${colorMap[color].border} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transition: 'all 0.7s ease-out' }}
    >
      {/* Animated Background Glow */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr ${colorMap[color].glow}`} />

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={src}
          alt={title}
          loading="lazy"
          onError={onImageError}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Floating Icon */}
        <div
          className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${colorMap[color].gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
          style={{ transitionDelay: `${index * 100 + 300}ms` }}
        >
          {color === 'sky' ? <Cog className="w-6 h-6 text-white" /> : <Settings className="w-6 h-6 text-white" />}
        </div>
      </div>

      {/* Content */}
      <div className="relative p-5 sm:p-6 space-y-3">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 bg-gradient-to-br ${colorMap[color].gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
            <Wrench className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h4 className={`text-gray-900 font-bold text-base sm:text-lg group-hover:${color === 'sky' ? 'text-blue-600' : 'text-cyan-600'} transition-colors duration-300`}>
              {title}
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm">{description}</p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="pt-2">
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${colorMap[color].gradient} rounded-full transition-all duration-1000 ${
                isVisible ? 'w-full' : 'w-0'
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

ProductCard.displayName = "ProductCard";

// === Feature Badge Component ===
const FeatureBadge = memo(({ icon: Icon, text, color, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`group flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-br ${color} border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
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

FeatureBadge.displayName = "FeatureBadge";

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
      className={`${className} transition-all duration-1000 ${
        isVisible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-4'
      }`}
    >
      <span className="bg-gray-900 bg-clip-text text-transparent animate-gradient-x">
        {text}
      </span>
    </h1>
  );
});

BlurText.displayName = "BlurText";

const Manufacture = memo(() => {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  const forgedProductImages = useMemo(
    () => [
      {
        src: "https://e7.pngegg.com/pngimages/561/1008/png-clipart-flange-manufacturing-stainless-steel-valve-stainless-miscellaneous-company-thumbnail.png",
        title: "Precision Forgings",
        description: "Heat-treated components",
      },
      {
        src: "https://www.tirupatiforge.com/images/products/auto-part.png",
        title: "Auto Components",
        description: "Automotive grade steel",
      },
      {
        src: "https://3.imimg.com/data3/KV/RN/MY-9357494/forged-cam-shaft-250x250.jpg",
        title: "Camshaft Forgings",
        description: "High-performance parts",
      },
      {
        src: "https://cpimg.tistatic.com/10512451/b/6/Automotive-Transmission-Parts.png",
        title: "Transmission Parts",
        description: "Precision engineered",
      },
      {
        src: "https://s.alicdn.com/@sc04/kf/Hacc4e5d022ea450d8cd1a02896f73b756/High-Quality-CNC-Forged-Wheel-Hub-Auto-Parts-and-Machinery-Made-From-Durable-Alloy-Brass-Carbon-Steel-Iron.png",
        title: "Wheel Hubs",
        description: "CNC machined alloy",
      },
      {
        src: "https://iacpl.co.in/wp-content/uploads/2018/12/Forged-Parts-3.png",
        title: "Custom Forgings",
        description: "Tailored solutions",
      },
    ],
    []
  );

  const flangeProductImages = useMemo(
    () => [
      {
        src: "https://www.tirupatiforge.com/images/products/weld-neck.png",
        title: "Weld-Neck Flanges",
        description: "High-pressure rated",
      },
      {
        src: "https://www.tirupatiforge.com/images/products/slip-on.png",
        title: "Slip-On Flanges",
        description: "Easy installation",
      },
      {
        src: "https://www.tirupatiforge.com/images/products/weld-neck.png",
        title: "Long Weld-Neck",
        description: "Extended hub design",
      },
      {
        src: "https://www.tirupatiforge.com/images/products/blind.png",
        title: "Blind Flanges",
        description: "Pipeline termination",
      },
      {
        src: "https://www.tirupatiforge.com/images/products/lap-jiont.png",
        title: "Lap-Joint Flanges",
        description: "Rotating compatibility",
      },
      {
        src: "https://www.tirupatiforge.com/images/products/socket-weld.png",
        title: "Socket-Weld Flanges",
        description: "Small bore piping",
      },
    ],
    []
  );

  const handleImageError = useCallback((event) => {
    event.currentTarget.src = "https://source.unsplash.com/1600x1066/?industry,metal";
  }, []);
   const navigate = useNavigate();
  const handleViewProductsClick = useCallback(() => {
      navigate("/products/slip-on");
    }, [navigate]);

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
              text="Manufacturing Excellence"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              delay={120}
            />
            <p
              className={`text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed transition-all duration-1000 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Precision forged components and high‑performance flanges engineered
              for demanding industries. Explore our process, materials, and
              quality that power real‑world reliability.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              <FeatureBadge 
                icon={Shield} 
                text="ISO Certified" 
                color="from-blue-50 to-blue-100"
                delay={0.5}
              />
              <FeatureBadge 
                icon={Award} 
                text="Quality Assured" 
                color="from-cyan-50 to-cyan-100"
                delay={0.6}
              />
              <FeatureBadge 
                icon={Zap} 
                text="Fast Delivery" 
                color="from-blue-50 to-cyan-100"
                delay={0.7}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
              <a
                onClick={handleViewProductsClick}
                className="px-6 sm:px-8 py-3 sm:py-4 text-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                View Catalog
              </a>
              <a
                href="#forged"
                className="px-6 sm:px-8 py-3 sm:py-4 text-center rounded-full border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 text-gray-700 hover:text-blue-700 font-medium transition-all duration-300"
              >
                Forged Products
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Forged Products Section */}
      <section id="forged" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Forged Products
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              High‑strength, heat‑treated steel forgings built to exacting tolerances for critical applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {forgedProductImages.map((product, index) => (
              <ProductCard
                key={product.src}
                src={product.src}
                index={index}
                title={product.title}
                description={product.description}
                onImageError={handleImageError}
                color="sky"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Flanges Section */}
      <section id="flanges" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-cyan-50/30 to-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Industrial Flanges
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A comprehensive range of flanges for pipelines and process plants — machined, inspected, and ready for service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {flangeProductImages.map((product, index) => (
              <ProductCard
                key={product.src}
                src={product.src}
                index={index}
                title={product.title}
                description={product.description}
                onImageError={handleImageError}
                color="cyan"
              />
            ))}
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
                  Need a custom forging or flange?
                </h3>
                <p className="text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed">
                  Share your drawings and specifications. Our team will recommend materials, processes, and lead‑times tailored to your project.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 text-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Get a Quote
                </a>
                <a
                  href="#"
                  className="px-8 py-4 text-center rounded-full border-2 border-blue-400 text-blue-700 hover:bg-blue-50 hover:border-blue-500 font-medium transition-all duration-300"
                >
                  Download Catalog
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

Manufacture.displayName = "Manufacture";

export default Manufacture;