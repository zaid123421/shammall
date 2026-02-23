'use client';

import Image from "next/image";
import Link from "next/link";

interface StoreCardProps {
  imgSrc: string;
  alt: string;
  smallText: string;
  mainText: string;
  href?: string;
}

export default function StoreCard({ imgSrc, alt, smallText, mainText, href }: StoreCardProps) {
  
  const CardContent = (
    <div className={`bg-black rounded-[8px] flex items-center justify-center px-8 py-3 transition-transform duration-200 
      cursor-pointer hover:scale-105`}>
      <Image
        src={imgSrc}
        alt={alt}
        width={40}
        height={40}
        className="object-cover"
      />
      <div className="flex flex-col px-5 text-right">
        <span className="text-white font-light text-sm">{smallText}</span>
        <span className="font-semibold text-2xl text-white whitespace-nowrap">{mainText}</span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" className="block">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}