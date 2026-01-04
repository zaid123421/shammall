"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DownloadSection from "@/components/sections/DownloadSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HomeSection from "@/components/sections/HomeSection";
import ShopSection from "@/components/sections/ShopSection";
import { Translations, translations } from "@/constants/translations";

import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [lang, setLang] = useState<keyof Translations>("ar");
  const t = translations[lang];
  
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
      <Header
        activeSection={activeSection}
        t={t}
        lang={lang}
        setLang={setLang}/>
      <HomeSection t={t}/>
      <ShopSection t={t} id="stores" />
      <FeaturesSection t={t} id="features" />
      <DownloadSection t={t} id="transparency" />
      <Footer t={t} />
    </>
  );
}
