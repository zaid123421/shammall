"use client";

import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
// import Image from "next/image";

type Props = {
  activeSection: string;
};

export default function Header({ activeSection }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["الشفافة", "مميزات التطبيق", "متاجر"];

  const sectionIds: Record<string, string> = {
    "الشفافة": "transparency",
    "مميزات التطبيق": "features",
    "متاجر": "stores",
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
      <nav className="container mx-auto flex flex-row-reverse justify-between items-center py-4 font-semibold px-4 md:px-6">
        <div>
          <p className="bg-gradient-to-b from-[#c9e7db] to-[#7ba998] bg-clip-text text-transparent text-2xl sm:text-4xl font-bold">
            Sham Mall
          </p>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 px-2">
          {sections.map((section) => {
            const isActive = activeSection === section;
            return (
              <a
                key={section}
                href={`#${sectionIds[section]}`}
                className={`${isActive ? "text-[#189172]" : "text-black"} hover:text-[#189172] duration-300 text-lg`}
              >
                {section}
              </a>
            );
          })}
        </div>

        <div className="flex flex-row-reverse items-center gap-5 mr-5">
          {/* Mobile Menu Icon */}
          <div className="md:hidden relative">
            {menuOpen ? (
              <LuX
                className="text-3xl cursor-pointer text-black"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <LuMenu
                className="text-3xl cursor-pointer text-black"
                onClick={() => setMenuOpen(true)}
              />
            )}

            {/* Dropdown Menu */}
            {menuOpen && (
              <div
                className="absolute left-[-75%] mt-4 w-52 bg-[#eeeeee]
                flex flex-col items-center shadow-lg border border-gray-300 rounded-xl"
              >
                {sections
                  .slice()
                  .reverse()
                  .map((section) => (
                    <a
                      key={section}
                      href={`#${sectionIds[section]}`}
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-[#189172] my-3 border-b border-gray-300 last:border-b-0 pb-2"
                    >
                      {section}
                    </a>
                  ))}
              </div>
            )}
          </div>

          <button
            className="bg-[#189172] p-2 px-[5px] text-sm sm:text-lg sm:px-[25px]
            border-2 border-[#189172] rounded-[5px] text-white font-bold cursor-pointer
            hover:bg-transparent hover:text-[#189172] duration-300"
          >
            تحميل التطبيق
          </button>
        </div>
      </nav>
    </header>
  );
}
