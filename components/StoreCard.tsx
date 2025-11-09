'use client';

import Image from "next/image";

interface StoreCardProps {
  imgSrc: string;
  alt: string;
  smallText: string;
  mainText: string;
}

export default function StoreCard({ imgSrc, alt, smallText, mainText }: StoreCardProps) {
  return (
    <div className="bg-black rounded-[8px] flex items-center justify-center px-8 py-3 cursor-pointer hover:scale-105 transition-transform duration-200">
      <Image
        src={imgSrc}
        alt={alt}
        placeholder="blur"
        blurDataURL={imgSrc}
        width={40}
        height={40}
        className="object-cover"
      />
      <div className="flex flex-col px-5 text-right">
        <span className="text-white font-light">{smallText}</span>
        <span className="font-semibold text-2xl text-white">{mainText}</span>
      </div>
    </div>
  );
}
