"use client";

import { TranslationContent } from "@/constants/translations";
import { useState } from "react";
import { LuMenu, LuX, LuLanguages } from "react-icons/lu";

type Props = {
  activeSection: string;
  t: TranslationContent;
  lang: string;
  setLang: (lang: "ar" | "en") => void;
};


export default function Header({ activeSection, t, lang, setLang }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const sections = [
    { label: t.transparencyTitle, id: "transparency" },
    { label: t.featuresTitle, id: "features" },
    { label: t.storesTitle, id: "stores" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <nav className={`container mx-auto flex ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'} justify-between items-center py-4 font-semibold px-4 md:px-6`}>
        {/* Logo */}
        <div>
          <p className="bg-gradient-to-b from-[#c9e7db] to-[#7ba998] bg-clip-text text-transparent text-2xl sm:text-4xl font-bold">
            Sham Mall
          </p>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 px-2">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`${isActive ? "text-[#189172]" : "text-black"} hover:text-[#189172] duration-300 text-lg`}
              >
                {section.label}
              </a>
            );
          })}
        </div>

        <div className={`flex ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'} items-center gap-3 sm:gap-5`}>

          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              onBlur={() => setTimeout(() => setLangMenuOpen(false), 200)}
              className={`flex items-center gap-2 border border-gray-300 px-3 py-1.5 rounded-md hover:bg-gray-50 duration-300 text-gray-700 bg-white shadow-sm ${lang === 'ar' ? 'flex-row' : 'flex-row'}`}
            >
              <LuLanguages className="text-xl text-[#189172]" />
              <span className="text-sm uppercase font-extrabold text-black">
                {lang === "ar" ? "العربية" : "English"}
              </span>
              <svg className={`w-4 h-4 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {langMenuOpen && (
              <div className={`absolute top-full mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-xl z-[60] overflow-hidden ${lang === 'ar' ? 'right-0' : 'left-0'}`}>
                <button
                  onClick={() => {
                    setLang("ar");
                    localStorage.setItem("app_lang", "ar"); // التخزين هنا
                    setLangMenuOpen(false);
                  }}
                  className={`w-full text-start px-4 py-3 text-sm hover:bg-[#189172] hover:text-white duration-200 flex items-center gap-2 ${lang === 'ar' ? 'bg-gray-50 font-bold text-[#189172]' : 'text-gray-700'}`}
                >
                  <span className="w-2 h-2 rounded-full bg-current opacity-40"></span>
                  العربية
                </button>

                {/* زر اللغة الإنجليزية */}
                <button
                  onClick={() => {
                    setLang("en");
                    localStorage.setItem("app_lang", "en"); // التخزين هنا
                    setLangMenuOpen(false);
                  }}
                  className={`w-full text-start px-4 py-3 text-sm hover:bg-[#189172] hover:text-white duration-200 flex items-center gap-2 ${lang === 'en' ? 'bg-gray-50 font-bold text-[#189172]' : 'text-gray-700'}`}
                >
                  <span className="w-2 h-2 rounded-full bg-current opacity-40"></span>
                  English
                </button>
              </div>
            )}
          </div>

          <button
            className="bg-[#189172] p-2 px-[10px] text-xs sm:text-base sm:px-[20px]
            border-2 border-[#189172] rounded-[5px] text-white font-bold cursor-pointer
            hover:bg-transparent hover:text-[#189172] duration-300 whitespace-nowrap"
          >
            {t.downloadBtn}
          </button>

          <div className="md:hidden relative flex items-center">
            {menuOpen ? (
              <LuX className="text-3xl cursor-pointer text-black" onClick={() => setMenuOpen(false)} />
            ) : (
              <LuMenu className="text-3xl cursor-pointer text-black" onClick={() => setMenuOpen(true)} />
            )}

            {menuOpen && (
              <div className={`absolute top-full mt-4 w-48 bg-white flex flex-col items-center shadow-xl border border-gray-100 rounded-xl py-2 ${lang === 'ar' ? 'left-0' : 'right-0'}`}>
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="w-full text-center hover:bg-gray-50 hover:text-[#189172] py-3 border-b border-gray-50 last:border-b-0"
                  >
                    {section.label}
                  </a>
                ))}
              </div>
            )}
          </div>

        </div>
      </nav>
    </header>
  );
}