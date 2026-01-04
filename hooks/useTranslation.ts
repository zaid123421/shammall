'use client';

import { useState, useEffect, useCallback } from "react";
import { translations } from "@/constants/translations";

export function useTranslation() {
  const [lang, setLang] = useState<"ar" | "en">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("app_lang") as "ar" | "en";
      return (saved === "ar" || saved === "en") ? saved : "ar";
    }
    return "ar";
  });

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const changeLang = useCallback((newLang: "ar" | "en") => {
    setLang(newLang);
    localStorage.setItem("app_lang", newLang);
  }, []);

  return { 
    t: translations[lang], 
    lang, 
    setLang: changeLang 
  };
}