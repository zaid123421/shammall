'use client';

import Image from "next/image";

interface ShopSectionCardProps {
  imgSrc: string;
  alt: string;
  text: string;
}

export default function ShopSectionCard({ imgSrc, alt, text }: ShopSectionCardProps) {
  return (
    <div className="bg-[#86B7A552] rounded-[8px] px-10 py-5 hover:-translate-y-[10px] duration-500 flex justify-center items-center flex-col">
      <Image
        src={imgSrc}
        alt={alt}
        placeholder="blur"
        blurDataURL={imgSrc}
        width={100}
        height={100}
        className="object-cover"
      />
      <span className="mt-5 text-[22px] font-semibold text-[#189172] text-center">
        {text}
      </span>
    </div>
  );
}
