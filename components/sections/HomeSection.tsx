'use client';

import Image from "next/image";
import StoreCard from "../StoreCard";
import { TranslationContent } from "@/constants/translations"; // استيراد النوع

// 1. أضف استقبال الـ t في الـ Props
interface Props {
  t: TranslationContent;
}

export default function HomeSection({ t }: Props) {
  return (
    <section className="relative container mx-auto min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      
      {/* ... الصور تبقى كما هي ... */}
      <div className="absolute inset-0 -z-10">
        <Image src="/home.webp" alt="home_image" fill priority placeholder="blur" blurDataURL="/home.webp" className="object-cover sm:object-auto" />
      </div>

      <div className="relative w-full max-w-[1000px] h-[300px] sm:h-[400px] md:h-[500px] flex justify-center items-center mt-10 md:mt-25 mx-auto">
        <Image src="/rectangle.png" alt="rectangle_image" placeholder="blur" blurDataURL="/rectangle.png" width={1000} height={500} priority className="object-cover w-full h-full rounded-[8px]" />

        <div className="absolute inset-0 flex items-center justify-center z-20">
          {/* 2. استبدال العنوان */}
          <p className="text-lg sm:text-2xl md:text-[50px] font-bold text-white text-center px-4 break-words leading-[1.6] w-[90%] md:w-[800px] pb-[150px] md:pb-[300px]">
            {t.heroTitle}
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row z-20 gap-5">
        <StoreCard
          imgSrc="/google-play.svg"
          alt="google_play"
          smallText={t.getItOn} // 3. استبدال نصوص الكروت
          mainText="Google Play"
        />

        <StoreCard
          imgSrc="/apple.svg"
          alt="apple"
          smallText={t.downloadFrom} // 4. استبدال نصوص الكروت
          mainText="Apple Store"
        />
      </div>

    </section>
  );
}