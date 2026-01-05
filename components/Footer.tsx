"use client";

import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TranslationContent } from "@/constants/translations";
interface ExtendedProps {
  t: TranslationContent;
}

export default function Footer({ t }: ExtendedProps) {
  return (
    <footer className="relative bg-[#1a1a1a]">
      <div className="flex flex-col items-center justify-center py-12">
        <p className="bg-gradient-to-b from-[#c9e7db] to-[#7ba998] bg-clip-text text-transparent text-5xl font-bold">
          Sham Mall
        </p>

        <div className="mt-10 text-white flex flex-col md:flex-row md:justify-center items-center gap-5 mb-5">
          <div className="flex items-center gap-3">
            <MdOutlineEmail className="text-lg" />
            <span className="text-xl">Shammsup@gmail.com</span>
          </div>
          <div className="hidden md:block">|</div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-xl" />
            <span dir="ltr" className="text-lg">+963 959 746 800</span>
          </div>
        </div>

        <p dir="rtl" className="text-white/70 mt-5 font-medium px-5 text-center">
          {t.copyright}
        </p>

      <div className="flex flex-col items-center sm:flex-row sm:gap-3">
        <Link 
          href={`/privacy`}
          target="_blank"
          className="text-[#38BA98] hover:underline mt-3 text-sm"
        >
          {t.privacyPolicy}
        </Link>

        <Link 
          href={`/delete-account`}
          target="_blank"
          className="text-[#38BA98] hover:underline mt-3 text-sm"
        >
          {t.deleteAccount}
        </Link>
      </div>
      </div>
    </footer>
  );
}
