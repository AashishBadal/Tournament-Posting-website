import React from "react";
import Navbar from "../components/LandingPage/Navbar";
import Hero from "../components/LandingPage/Hero";
import Features from "../components/LandingPage/Features";
import Tournaments from "../components/LandingPage/Tournaments";
import HowItWorks from "../components/LandingPage/HowItWorks";
import Testimonials from "../components/LandingPage/Testimonials";
import CTA from "../components/LandingPage/CTA";
import Footer from "../components/LandingPage/Footer";

function LandingPage() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
      <Tournaments />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default LandingPage;