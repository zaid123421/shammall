'use client';

import { SectionProps } from "@/types/sections";
import Image from "next/image";
import { IoMdCheckboxOutline } from "react-icons/io";
import { TranslationContent } from "@/constants/translations";

interface ExtendedProps extends SectionProps {
  t: TranslationContent;
}

export default function FeaturesSection({ id, t }: ExtendedProps) {
  const featureKeys: (keyof TranslationContent)[] = ["feature1", "feature2", "feature3", "feature4"];

  return (
    <section
      id={id}
      className="scroll-mt-18 sm:scroll-mt-20 lg:scroll-mt-16 relative container mx-auto w-full min-h-screen flex flex-col justify-center items-center text-center px-10"
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 p-4 w-full">
        <div className="order-1 xl:order-2 p-4">
          <div className="relative mb-12">
            <h1 className={`text-[25px] sm:text-[30px] lg:text-[35px] text-[#0F172A] font-extrabold ${t.home === 'الرئيسية' ? 'text-right' : 'text-left'}`}>
              {t.featuresTitle}
            </h1>
            <Image
              src="/Vector.svg"
              alt="vector_image"
              width={210}
              height={100}
              className={`absolute ${t.home === 'الرئيسية' ? 'right-0' : 'left-0'}`}
            />
          </div>

          <div className={`flex flex-col ${t.home === 'الرئيسية' ? 'items-end' : 'items-start'}`}>
            {featureKeys.map((key, i) => (
              <div
                key={i}
                className={`flex items-center mt-5 gap-3 ${t.home === 'الرئيسية' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <IoMdCheckboxOutline className="text-[#189172] text-[28px] sm:text-[32px] lg:text-[38px] shrink-0" />
                <p className={`text-[18px] sm:text-[22px] lg:text-[32px] ${t.home === 'الرئيسية' ? 'text-right' : 'text-left'}`}>
                  {t[key]}
                </p>
              </div>
            ))}

            <button
              className="bg-[#189172] p-2 px-[5px] text-sm sm:text-lg sm:px-[50px]
              border-2 border-[#189172] rounded-[5px] text-white font-bold cursor-pointer
              hover:bg-transparent hover:text-[#189172] duration-300 mt-10"
            >
              {t.downloadNow}
            </button>
          </div>
        </div>

        <div className="order-2 xl:order-1 max-w-full relative mx-auto hidden sm:block">
          <div className="w-[393px] h-[600px] relative overflow-hidden">
            <Image
              src="/application-properties.png"
              alt="features"
              fill
              className="object-contain xl:object-left"
            />
            <div className="img-box">
              <div className="rotate-[30deg] mt-10 text-gray-700 relative z-20">
                <h2 className="text-xl font-bold mb-2">{t.easyShopping}</h2>
                <p className="text-lg opacity-90 max-w-md mx-auto">
                  {t.browseEasy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}