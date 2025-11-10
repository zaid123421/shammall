'use client';

import { SectionProps } from "@/types/sections";
import Image from "next/image";
import { IoMdCheckboxOutline } from "react-icons/io";

export default function FeaturesSection({ id }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-18 sm:scroll-mt-20 lg:scroll-mt-16 relative container mx-auto w-full min-h-screen flex flex-col justify-center items-center text-center px-10"
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 p-4 w-full">
        <div className="order-1 xl:order-2 p-4">
          <div className="relative mb-12">
            <h1 className="text-[25px] sm:text-[30px] lg:text-[35px] text-[#0F172A] font-extrabold text-right">
              مميزات التطبيق
            </h1>
            <Image
              src="/Vector.svg"
              alt="vector_image"
              placeholder="blur"
              blurDataURL="/Vector.svg"
              width={210}
              height={100}
              className="absolute right-0"
            />
          </div>
          <div className="flex flex-col items-end">
            {[
              "تجربة مستخدم مميزة بتصميم شرعي جميل",
              "أقسام متنوعة تلبي كل الاحتياجات",
              "دعم للغة العربية بالكامل",
              "سرعة في التوصيل وسهولية الدفع",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center flex-row-reverse mt-5 gap-3"
              >
                <IoMdCheckboxOutline className="text-[#189172] text-[28px] sm:text-[32px] lg:text-[38px] shrink-0" />
                <p className="text-[18px] sm:text-[22px] lg:text-[32px] text-right">
                  {text}
                </p>
              </div>
            ))}

            <button
              className="bg-[#189172] p-2 px-[5px] text-sm sm:text-lg sm:px-[50px]
              border-2 border-[#189172] rounded-[5px] text-white font-bold cursor-pointer
              hover:bg-transparent hover:text-[#189172] duration-300 mt-10"
            >
              تحميل التطبيق الآن
            </button>
          </div>
        </div>
        <div className="order-2 xl:order-1 max-w-full relative mx-auto hidden sm:block">
          <div className="w-[393px] h-[600px] relative overflow-hidden">
            <Image
              src="/application-properties.png"
              alt="features"
              placeholder="blur"
              blurDataURL="/application-properties.png"
              fill
              className="object-contain xl:object-left"
            />
            <div className="img-box">
              <div className="rotate-[30deg] mt-10 text-gray-700 relative z-20">
                <h2 className="text-xl font-bold mb-2">التسوق بكل سهولة</h2>
                <p dir="rtl" className="text-lg opacity-90 max-w-md mx-auto">
                  يمكنك التصفح الآن بكل سهولة عبر تطبيق <span className="font-bold">Shammal</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
