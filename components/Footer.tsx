"use client";

import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {

  return (
    <footer className="relative bg-[#1a1a1a]">

      <div className="flex flex-col items-center justify-center py-12">

        <Image
          src="/shammall.svg"
          alt="Logo"
          width={200}
          height={200}
          placeholder="blur"
          blurDataURL="/shammall.svg"
        />

        <div className="mt-10 text-white flex flex-col md:flex-row md:justify-center items-center gap-5 mb-5">
          <div className="flex items-center gap-3">
            <MdOutlineEmail className="text-lg" />
            <span className="text-xl">Shammsup@gmail.com</span>
          </div>
          <div className="hidden md:block">|</div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-xl" />
            <span className="text-lg">+963 959 746 800</span>
          </div>
        </div>

        <p dir="rtl" className="text-white/70 mt-5 font-medium px-5 text-center">شام مول جميع الحقوق محفوظة 2025 &copy;</p>

      </div>

    </footer>
  );
}
