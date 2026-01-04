'use client';

import { SectionProps } from "@/types/sections";
import ShopSectionCard from "../ShopSectionCard";
import { shopSectionData } from "@/data/shop_section_data";
import { TranslationContent } from "@/constants/translations"; // استيراد النوع

// تحديث الـ Interface ليشمل t
interface ExtendedSectionProps extends SectionProps {
  t: TranslationContent;
}

export default function ShopSection({ id, t }: ExtendedSectionProps) {
  return (
    <section
      id={id}
      className="relative container scroll-mt-18 sm:scroll-mt-20 md:scroll-mt-0 mx-auto w-full min-h-screen flex flex-col justify-center items-center text-center p-10"
    >
      <h1 className="text-[40px] font-bold">{t.storesTitle}</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
        {shopSectionData.map((item) => (
          <ShopSectionCard
            key={item.textKey}
            imgSrc={item.imgSrc}
            alt={item.alt}
            text={item.textKey}
            t={t}
          />
        ))}
      </div>
    </section>
  );
}