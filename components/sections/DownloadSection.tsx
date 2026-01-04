'use client';

import { SectionProps } from "@/types/sections";
import Image from "next/image";
import StoreCard from "../StoreCard";
import { TranslationContent } from "@/constants/translations";

interface ExtendedProps extends SectionProps {
  t: TranslationContent;
}

export default function DownloadSection({ id, t }: ExtendedProps) {
  return (
    <section
      id={id}
      className="relative container scroll-mt-18 sm:scroll-mt-20 mx-auto w-full min-h-screen flex flex-col justify-center items-center text-center px-10 pb-[100px]"
    >
      <div>
        <h1 className="text-[30px] sm:text-[40px] font-bold text-[#38BA98] leading-tight">
          {t.downloadTitle}
        </h1>
        <p className="text-[20px] sm:text-[30px] mt-5 max-w-[900px] leading-relaxed opacity-90">
          {t.downloadDesc}
        </p>
      </div>

      <div className="relative inline-block mt-10">
        <Image
          src="/Download-our-app.png"
          alt="phone app preview"
          placeholder="blur"
          blurDataURL="/Download-our-app.png"
          width={800}
          height={800}
          className="block h-auto w-full max-w-[600px] md:max-w-[800px]"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col sm:flex-row z-20 gap-5 mt-5">
        <StoreCard
          imgSrc="/google-play.svg"
          alt="google_play"
          smallText={t.getItOn}
          mainText="Google Play"
        />

        <StoreCard
          imgSrc="/apple.svg"
          alt="apple"
          smallText={t.downloadFrom}
          mainText="Apple Store"
        />
      </div>
    </section>
  );
}