'use client';

import Image from "next/image";
import StoreCard from "../StoreCard";

export default function HomeSection() {
  return (
    <section className="relative container mx-auto w-full min-h-screen flex flex-col justify-center items-center text-center">

      {/* الخلفية الكبيرة */}
      <div className="w-full h-full">
        <Image
          src="/home.webp"
          alt="home_image"
          fill
          priority
          placeholder="blur"
          blurDataURL="/home.webp"
          className="object-cover sm:object-auto"
        />
      </div>

      {/* <div className="relative bg-red-500 flex justify-center items-center">
        <Image
          src="/rectangle.png"
          alt="rectangle_image"
          placeholder="blur"
          blurDataURL="/rectangle.png"
          width={800}
          height={800}
          className="object-cover"
        />

        <div className="relative z-20 flex items-center justify-center py-5">
          <p className="text-3xl md:text-[50px] font-bold text-white text-center px-4 md:px-0 break-words max-w-full md:max-w-[90%]">
            كل الأسواق في مكان واحد بتجربة شرقية أصيلة
          </p>
        </div>
      </div> */}

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
