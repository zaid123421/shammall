'use client';

import { SectionProps } from "@/types/sections";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import StoreCard from "../StoreCard";

export default function DownloadSection({ id }: SectionProps) {
  return (
    <section
      id={id}
      className="relative container scroll-mt-18 sm:scroll-mt-20 mx-auto w-full min-h-screen flex flex-col justify-center items-center text-center px-10 pb-[100px]"
    >
      <div>
        <h1 dir="rtl" className="text-[40px] font-bold text-[#38BA98]">
          حمل تطبيقنا وابق على اتصال دائم!
        </h1>
        <p className="text-[30px] mt-5 max-w-[900px]">
          استمتع بتجربة استخدام أسهل وأسرع من خلال تطبيقنا علي الجوال
          تابع طلباتك, تصفح خدماتنا, وتواصل معنا بضغطة زر - أينما كنت وفي أي وقت
        </p>
      </div>

      <div className="relative inline-block mt-10">

        <Image
          src="/Download-our-app.png"
          alt="phone"
          placeholder="blur"
          blurDataURL="/Download-our-app.png"
          width={800}
          height={800}
          className="block"
          loading="lazy"
        />

      </div>

      <div className="flex flex-col sm:flex-row z-20 gap-5">
        <StoreCard
          imgSrc="/google-play.svg"
          alt="google_play"
          smallText="احصل عليه من"
          mainText="Google Play"
        />

        <StoreCard
          imgSrc="/apple.svg"
          alt="apple"
          smallText="تنزيل من"
          mainText="Apple Store"
        />
      </div>
    </section>
  );
}
