"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DownloadSection from "@/components/sections/DownloadSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HomeSection from "@/components/sections/HomeSection";
import ShopSection from "@/components/sections/ShopSection";

import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const html = document.documentElement;
    html.style.scrollBehavior = "smooth";

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <HomeSection />
      <ShopSection id="stores" />
      <FeaturesSection id="features" />
      <DownloadSection id="transparency" />
      <Footer />
    </>
  );
}
