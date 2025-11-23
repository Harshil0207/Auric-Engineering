import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import "./App.css";

// Eager load components that appear on initial page load
import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";
import ScrollToTop from "./Components/utils/ScrollToTop";

// Lazy load page components for better performance
const Hero = lazy(() => import("./Pages/Home/Hero"));
const AboutUs = lazy(() => import("./Pages/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("./Pages/ContactUs/ContactUs"));
const ManufacturePage = lazy(() => import("./Pages/Manufacture/Manufacture"));
const SlipFlanges = lazy(() => import("./Pages/Products/SlipFlanges"));
const WeldNeck = lazy(() => import("./Pages/Products/WeldNeck"));
const Blind = lazy(() => import("./Pages/Products/Blind"));
const SocketWeld = lazy(() => import("./Pages/Products/SocketWeld"));
const Threaded = lazy(() => import("./Pages/Products/Threaded"));
const Reducing = lazy(() => import("./Pages/Products/Reducing"));
const LapJoint = lazy(() => import("./Pages/Products/LapJoint"));
const Plate = lazy(() => import("./Pages/Products/Plate"));
const RfRij = lazy(() => import("./Pages/Products/RfRij"));
const LongWeld = lazy(() => import("./Pages/Products/LongWeld"));
const ForgedFitting = lazy(() => import("./Pages/Products/ForgedFitting"));


const ManufactureCapacity = lazy(() => import("./Pages/ManufacturingCapacity/ManufacturingCapacity"));
const QualityControl = lazy(() => import("./Pages/QualityControl/QualityControl"));
// const Investor = lazy(() => import("./Pages/Investor/Investor"));
// const Financials = lazy(() => import("./Pages/Investor/Financials"));
// const Shareholding = lazy(() => import("./Pages/Investor/ShareHolding"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-neutral-950">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-sky-400/30 border-t-sky-400 rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-cyan-300 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen w-full">
          <Navbar />
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <AboutUs />
                    </>
                  }
                />
                <Route path="/manufacture" element={<ManufacturePage />} />
                <Route path="/products/slip-on" element={<SlipFlanges />} />
                <Route
                  path="/products/weld-neck"
                  element={<WeldNeck />}
                />
                <Route path="/products/blind" element={<Blind />} />
                <Route path="/products/socket-weld" element={<SocketWeld />} />
                <Route
                  path="/products/threaded"
                  element={<Threaded />}
                />
                <Route path="/products/reducing" element={<Reducing />} />
                <Route path="/products/lap-joint" element={<LapJoint />} />
                <Route path="/products/plate" element={<Plate />} />
                <Route path="/products/rf-rij" element={<RfRij />} />
                <Route path="/products/long-weld" element={<LongWeld />} />
                <Route path="/products/forged-fitting" element={<ForgedFitting />} />
                <Route path="/manufacturing-capacity" element={<ManufactureCapacity />} />
                <Route path="/quality-control" element={<QualityControl />} />
                {/* <Route path="/investor" element={<Investor />} />
                <Route path="/investor/financials" element={<Financials />} />
                <Route path="/investor/shareholding" element={<Shareholding />} /> */}
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/aboutus" element={<AboutUs />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
