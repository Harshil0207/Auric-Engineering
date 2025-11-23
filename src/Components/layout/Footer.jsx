import { memo, useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, ArrowRight, Send, Zap, Award, Users } from "lucide-react";
import Logo from "../../assets/Footer.png";

const Footer = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const footer = document.getElementById("footer");
    if (footer) observer.observe(footer);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "from-blue-600 to-blue-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "from-sky-500 to-cyan-400" },
    { icon: Linkedin, href: "https://in.linkedin.com/company/auric-engineering-pvt-ltd---india", label: "LinkedIn", color: "from-blue-700 to-blue-500" }
  ];

  const pageLinks = [
    { name: "Home", href: "/" },
    { name: "Manufacture", href: "/manufacture" },
    { name: "Quality Control", href: "/quality-control" },
    { name: "Manufacture Capacity", href: "/manufacturing-capacity" }
  ];

  const companyLinks = [
    { name: "About Us", href: "/aboutus" },
    { name: "Contact", href: "/contact-us" },
  ];

  const stats = [
    { icon: Award, value: "25+", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Zap, value: "99%", label: "Quality Rate" }
  ];

  const workingHours = [
    { day: "Mon - Fri", time: "8:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 2:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  return (
    <footer
      id="footer"
      className="relative bg-black text-gray-300 overflow-hidden"
    >
      {/* Animated Mesh Gradient Background */}
      <div
        className="absolute inset-0 opacity-30 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)`
        }}
      ></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-grid" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Animated Top Border with Shimmer */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent "></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company Info */}
            <div
              className={`lg:col-span-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="mb-6 group">
                <div className="flex items-center gap-4">
                  <img
                    src={Logo}
                    alt="Auric Engineering"
                    className="w-46 h-auto sm:w-60 md:w-60 object-contain"
                  />
                </div>
              </div>

              <p className="text-gray-400 text-base leading-relaxed mb-8">
                Your trusted partner in forged steel solutions. Delivering strength,
                precision, and quality for industries worldwide since 1972.
              </p>

              {/* Newsletter */}
              <div className="mb-8 group">
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full "></div>
                  Stay Updated
                </h4>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl px-5 py-4 pr-14 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300 hover:border-slate-600"
                    required
                  />
                  <button
                    onClick={handleNewsletterSubmit}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white p-2.5 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 group"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="group relative w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl flex items-center justify-center hover:border-transparent transition-all duration-500 overflow-hidden hover:scale-110 hover:-translate-y-1"
                    style={{ transitionDelay: `${idx * 50}ms` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-all duration-500 relative z-10 group-hover:scale-110 group-hover:rotate-12" />
                    <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div
              className={`lg:col-span-2 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: "300ms" }}
            >
              <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></span>
              </h3>
              <ul className="space-y-3">
                {pageLinks.map((link, idx) => (
                  <li key={idx} className="group">
                    <a
                      href={link.href}
                      className="flex items-center text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm relative pl-0 hover:pl-6"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      <span className="relative">
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div
              className={`lg:col-span-2 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: "400ms" }}
            >
              <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest relative inline-block">
                Company
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></span>
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link, idx) => (
                  <li key={idx} className="group">
                    <a
                      href={link.href}
                      className="flex items-center text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm relative pl-0 hover:pl-6"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      <span className="relative">
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Hours */}
            <div
              className={`lg:col-span-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              style={{ transitionDelay: "500ms" }}
            >
              <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest relative inline-block">
                Get In Touch
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></span>
              </h3>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: MapPin, content: "8-4-368/A SANTHNAGAR HYDERABAD TG IN 500018", link: null },
                  { icon: Phone, content: "040 2335 3898", link: "tel:04023353898" },
                  { icon: Mail, content: "auricengg@hotmail.com", link: "mailto:auricengg@hotmail.comm" }
                ].map((item, idx) => (
                  <div key={idx} className="group flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                    <div className="w-11 h-11 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <item.icon className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    {item.link ? (
                      <a href={item.link} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 leading-relaxed">
                        {item.content}
                      </a>
                    ) : (
                      <div className="text-sm text-gray-400 leading-relaxed">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Working Hours Card */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 overflow-hidden group hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                      Working Hours
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {workingHours.map((schedule, idx) => (
                      <div key={idx} className="flex justify-between items-center text-sm bg-slate-900 rounded-lg p-3 hover:bg-slate-900/50 transition-colors duration-300">
                        <span className="text-gray-400">{schedule.day}</span>
                        <span className={`font-semibold ${schedule.time === "Closed" ? "text-red-400" : "text-cyan-400"
                          }`}>
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t border-slate-800/50 py-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Auric Engineering. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Sitemap"].map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="group relative text-gray-500 hover:text-cyan-400 transition-colors duration-300"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes particle {
          0%, 100% { 
            transform: translateY(0) translateX(0) scale(1); 
            opacity: 0; 
          }
          25% { 
            transform: translateY(-30px) translateX(15px) scale(1.5); 
            opacity: 0.8; 
          }
          50% { 
            transform: translateY(-60px) translateX(-10px) scale(1); 
            opacity: 0.4; 
          }
          75% { 
            transform: translateY(-30px) translateX(5px) scale(1.2); 
            opacity: 0.6; 
          }
        }

        @keyframes particle-slow {
          0%, 100% { 
            transform: translateY(0) translateX(0) scale(1); 
            opacity: 0; 
          }
          25% { 
            transform: translateY(-15px) translateX(8px) scale(1.2); 
            opacity: 0.6; 
          }
          50% { 
            transform: translateY(-30px) translateX(-5px) scale(0.8); 
            opacity: 0.3; 
          }
          75% { 
            transform: translateY(-15px) translateX(3px) scale(1); 
            opacity: 0.5; 
          }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, -50px) scale(1.2); }
        }

        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, 40px) scale(1.15); }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }

        .animate-particle {
          animation: particle 20s ease-in-out infinite;
        }

        .animate-particle-slow {
          animation: particle-slow 30s ease-in-out infinite;
        }

        .animate-float {
          animation: float 15s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 25s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-grid {
          animation: gridMove 20s linear infinite;
        }
      `}</style>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;