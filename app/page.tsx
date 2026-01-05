"use client";

import { useEffect, useState, useMemo } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DownloadSection from "@/components/sections/DownloadSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HomeSection from "@/components/sections/HomeSection";
import ShopSection from "@/components/sections/ShopSection";
import { translations } from "@/constants/translations";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("app_lang") as "ar" | "en";
    setTimeout(() => {
      if (savedLang && (savedLang === "ar" || savedLang === "en")) {
        setLang(savedLang);
      }
      setIsClient(true);
    }, 0);

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
    return () => observer.disconnect();
  }, []);

  const t = useMemo(() => translations[lang], [lang]);

  const handleLangChange = (newLang: "ar" | "en") => {
    setLang(newLang);
    localStorage.setItem("app_lang", newLang);
  };

  if (!isClient) return <div className="min-h-screen bg-white" />;

  return (
    <div>
      <Header
        activeSection={activeSection}
        t={t}
        lang={lang}
        setLang={handleLangChange}
      />
      <main>
        <HomeSection t={t}/>
        <ShopSection t={t} id="stores" />
        <FeaturesSection t={t} id="features" />
        <DownloadSection t={t} id="transparency" />
      </main>
      <Footer t={t} />
    </div>
  );
}