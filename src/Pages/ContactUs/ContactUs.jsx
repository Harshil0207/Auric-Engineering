import { memo, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter } from "lucide-react";
import BlurText from "../../Components/utils/BlurText.jsx";
import { fadeIn, cardVariants } from "../../constants/animations";
import ContactInfo from "../../Components/common/ContactInfo";
import MapEmbed from "../../Components/common/MapEmbed";

const ContactUs = memo(() => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const subjects = useMemo(
    () => [
      "General Inquiry",
      "Product Information",
      "Technical Support",
      "Business Partnership",
      "Quality Assurance",
      "Investor Relations",
    ],
    []
  );

  const validate = useCallback(() => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required.";
    if (
      !formData.email.trim() ||
      !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)
    )
      newErrors.email = "Valid Email is required.";
    if (!formData.phone.trim() || !/^\+?\d{7,15}$/.test(formData.phone))
      newErrors.phone = "Valid Phone Number is required.";
    if (!formData.subject.trim())
      newErrors.subject = "Please select a subject.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  }, [formData]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      setErrors({});
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setSubmitSuccess(false), 4000);
      }, 1500);
    },
    [validate]
  );

  const inputBase =
    "w-full rounded-lg bg-white border-2 border-gray-200 text-gray-900 px-4 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-400";
  const labelBase =
    "absolute left-4 top-2 text-gray-600 text-sm transition-all";

  const contactItems = useMemo(
    () => [
      {
        icon: MapPin,
        title: "Address",
        text: "Udgam School, 3,Auric Engineering Aadarsh City -A Beside Punit Nagar, 80 Feet Rd, B/h, Rajkot, Gujarat 360004",
        color: "text-red-600",
      },
      {
        icon: Phone,
        title: "Phone",
        text: "+91 07434905789",
        secondary: "+91 07434905789",
        color: "text-blue-600",
      },
      {
        icon: Mail,
        title: "Email",
        text: "info@manufacturing.com",
        secondary: "sales@manufacturing.com",
        color: "text-green-600",
      },
      {
        icon: Clock,
        title: "Working Hours",
        text: "Mon - Fri: 8:00 AM - 8:00 PM, Sat: 9:00 AM - 6:00 PM, Sun: 10:00 AM - 4:00 PM",
        color: "text-orange-600",
      },
    ],
    []
  );

  const EMBED_SRC =
    "https://www.google.com/maps/place/Auric+Engineering+Rajkot/@22.2459909,70.7835601,17z/data=!4m14!1m7!3m6!1s0x3959cbdf19456397:0x8ae1246f1d7cb63e!2sAuric+Engineering+Rajkot!8m2!3d22.2458618!4d70.7854269!16s%2Fg%2F11q2yb4fss!3m5!1s0x3959cbdf19456397:0x8ae1246f1d7cb63e!8m2!3d22.2458618!4d70.7854269!16s%2Fg%2F11q2yb4fss?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D";

  const DIRECTIONS_URL =
    "https://www.google.com/maps/dir//Udgam+School,+3,Auric+Engineering+Aadarsh+City+-A+Beside+Punit+Nagar,+80+Feet+Rd,+B%2Fh,+Rajkot,+Gujarat+360004/@21.9698156,70.9313563,9.79z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3959cbdf19456397:0x8ae1246f1d7cb63e!2m2!1d70.7854269!2d22.2458618?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="relative bg-neutral-50 text-gray-900 min-h-screen">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          <BlurText
            text="Contact Us"
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
            Get in touch with our team for inquiries, support, or business
            partnerships. We also welcome media inquiries, job applications, and
            collaboration proposals.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Contact Info */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Reach out to us for customer service, supplier relations, media
                interviews, and any other queries.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-lg hover:shadow-xl hover:border-blue-400 transition-all duration-300 p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                  >
                    <div className={`w-12 h-12 ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-full h-full" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.text}
                    </p>
                    {item.secondary && (
                      <p className="text-gray-600 text-sm mt-2">
                        {item.secondary}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Social Media */}
            <div className="rounded-2xl border-2 border-gray-200 bg-white shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-blue-200 hover:border-blue-400 flex items-center justify-center text-blue-600 hover:text-blue-700 transition-all hover:scale-110"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-100 to-cyan-50 border-2 border-cyan-200 hover:border-cyan-400 flex items-center justify-center text-cyan-600 hover:text-cyan-700 transition-all hover:scale-110"
                  title="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border-2 border-gray-200 bg-white shadow-xl p-8 lg:p-10 h-fit"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Send Message
            </h2>

            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-100 border-2 border-green-400 text-green-700 rounded-lg flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">
                  Thank you! Your message has been submitted successfully.
                </span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: "name", type: "text", label: "Full Name *" },
                { name: "email", type: "email", label: "Email Address *" },
                { name: "phone", type: "tel", label: "Phone Number *" },
                { name: "company", type: "text", label: "Company Name" },
              ].map((field, idx) => (
                <div key={idx} className="relative">
                  <input
                    name={field.name}
                    type={field.type}
                    value={formData[field.name]}
                    placeholder={
                      focusedField === field.name
                        ? ""
                        : field.label.replace(" *", "")
                    }
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField("")}
                    required={field.label.includes("*")}
                    className={`${inputBase}`}
                  />
                  {errors[field.name] && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              <div className="relative">
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField("")}
                  required
                  className={`${inputBase} appearance-none pr-8`}
                >
                  <option value="" disabled>
                    {focusedField === "subject" ? "" : "Select a subject"}
                  </option>
                  {subjects.map((sub, i) => (
                    <option key={i} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  placeholder={focusedField === "message" ? "" : "Your message"}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField("")}
                  required
                  className={`${inputBase} resize-none`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Submitting...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Visit Our Location
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Located in the heart of Rajkot, our facility is easily accessible
              from all major routes.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border-2 border-gray-200 shadow-2xl"
          >
            <MapEmbed iframeSrc={EMBED_SRC} directionsUrl={DIRECTIONS_URL} />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 p-8 sm:p-10 lg:p-12 shadow-xl text-center"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Have Questions?
            </h3>
            <p className="text-gray-700 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Our team is ready to help. Fill out the form above or call us directly
              for immediate assistance.
            </p>
            <a
              href="tel:+917434905789"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Call Us Now
            </a>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-200/40 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>
    </div>
  );
});

ContactUs.displayName = "ContactUs";

export default ContactUs;