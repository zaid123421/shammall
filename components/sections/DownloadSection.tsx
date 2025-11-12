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

      {/* <div className="flex flex-col sm:flex-row gap-16 mt-10">
        <div className="flex flex-col items-center">
          <Image
            src="/qr.png"
            alt="qr"
            placeholder="blur"
            blurDataURL="/qr.png"
            width={125}
            height={125}
          />
          <span
            dir="rtl"
            className="text-[#0F172A] text-[20px] w-[175px] mt-3 font-bold"
          >
            امسح ضوئيا لتنزيل تطبيق Arabesk
          </span>
        </div>

        <div>
          <div className="flex items-center gap-3 justify-center sm:mt-10">
            <span className="text-[#0F172A] text-[26px] font-bold">4.5</span>
            <div className="flex gap-1">
              <FaStar className="text-2xl text-[#38BA98]" />
              <FaStar className="text-2xl text-[#38BA98]" />
              <FaStar className="text-2xl text-[#38BA98]" />
              <FaStar className="text-2xl text-[#38BA98]" />
              <FaStar className="text-2xl text-[#38BA98]" />
            </div>
          </div>
          <span className="text-[#0F172A] text-[20px] block w-[250px] mt-3 font-bold">
            انضم إلى أكثر من 78 مليون متسوق حول العالم
          </span>
        </div>
      </div> */}

      <div className="relative inline-block mt-10">
        {/* <div className="flex flex-col items-center gap-4 mt-4 mb-10 lg:hidden"> */}
          {/* الكرت الأول */}
          {/* <div className="bg-white p-4 rounded-lg shadow-2xl flex gap-5 items-center w-[250px]">
            <div className="flex flex-col items-start">
              <span className="text-[20px] text-[#909090]">Monthly Stats</span>
              <span className="text-[20px] font-extrabold">+25%</span>
            </div>
            <Image
              src="/chart.svg"
              alt="chart"
              placeholder="blur"
              blurDataURL="/chart.svg"
              width={65}
              height={65}
            />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-2xl flex gap-5 items-center w-[250px]">
            <FaStar className="text-2xl text-[#F2C94C]" />
            <div className="flex flex-col items-start">
              <span className="text-[20px]">4.8</span>
              <span className="text-[20px] text-[#909090]">Satisfaction</span>
            </div>
          </div> */}
        {/* </div> */}

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

        {/* <div className="hidden lg:block">
          <div className="absolute top-65 -right-26 bg-white p-4 rounded-lg shadow-2xl flex gap-5 items-center">
            <div className="flex flex-col items-start">
              <span className="text-[20px] text-[#909090]">Monthly Stats</span>
              <span className="text-[20px] font-extrabold">+25%</span>
            </div>
            <Image
              src="/chart.svg"
              alt="chart"
              placeholder="blur"
              blurDataURL="/chart.svg"
              width={75}
              height={75}
            />
          </div>

          <div className="absolute bottom-65 -left-4 bg-white p-4 rounded-lg shadow-2xl flex gap-5 items-center">
            <FaStar className="text-2xl text-[#F2C94C]" />
            <div className="flex flex-col items-start">
              <span className="text-[20px]">4.8</span>
              <span className="text-[20px] text-[#909090]">Satisfaction</span>
            </div>
          </div>
        </div> */}
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
