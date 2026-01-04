'use client';

import { useEffect, useState } from "react";
import { translations } from "@/constants/translations";

export default function DeleteAccountPage() {
  const [lang, setLang] = useState<"ar" | "en">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("app_lang");
      return (saved === "ar" || saved === "en") ? saved : "ar";
    }
    return "ar";
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-white" />; 
  }

  const t = translations[lang];
  const isAr = lang === 'ar';

  return (
    <div className="flex flex-col min-h-screen">
      <main 
        dir={isAr ? "rtl" : "ltr"} 
        className={`flex-grow pt-32 pb-16 container mx-auto px-6 text-gray-800 leading-8 text-lg ${isAr ? 'text-right' : 'text-left'}`}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-[#38BA98] mb-8 text-center">
          {t.deleteAccountTitle}
        </h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <p className="mb-6">{t.deleteAccountIntro}</p>

          <hr className="border-gray-300" />

          {/* 1. كيفية تقديم الطلب */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#38BA98]">{t.howToDelete}</h2>
            <p>{t.howToDeleteDesc}</p>
            <p className="flex items-center gap-2 font-semibold">
              📩 {t.emailLabel}: <a href="mailto:Shammsup@gmail.com" className="text-[#38BA98] hover:underline">Shammsup@gmail.com</a>
            </p>
            <div className="mt-4">
              <p>{t.deleteEmailInstruction}</p>
              <span className="bg-gray-100 px-3 py-2 rounded font-mono text-sm block mt-2 border-l-4 border-[#38BA98]">
                {t.deleteEmailSubject}
              </span>
            </div>
          </section>

          <hr className="border-gray-300" />

          {/* 2. المعلومات المطلوبة */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#38BA98]">{t.requiredInfoTitle}</h2>
            <p>{t.requiredInfoDesc}</p>
            <ul className={`list-disc space-y-1 ${isAr ? 'pr-8' : 'pl-8'}`}>
              {t.requiredInfoList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </section>

          <hr className="border-gray-300" />

          {/* 3. ماذا يحدث بعد الإرسال */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#38BA98]">{t.afterDeleteTitle}</h2>
            <p>{t.afterDeleteDesc}</p>
            <ul className={`list-disc space-y-1 ${isAr ? 'pr-8' : 'pl-8'}`}>
              {t.afterDeleteList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p className="mt-4 font-bold text-red-600 p-3 bg-red-50 rounded-lg">
              ⚠️ {t.afterDeleteWarning}
            </p>
          </section>

          <hr className="border-gray-300" />

          {/* 4. البيانات التي يتم حذفها */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#38BA98]">{t.dataDeletedTitle}</h2>
            <p>{t.dataDeletedDesc}</p>
            <ul className={`list-disc space-y-1 ${isAr ? 'pr-8' : 'pl-8'}`}>
              {t.dataDeletedList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p className="mt-4 italic opacity-80">{t.legalRetention}</p>
          </section>

          <hr className="border-gray-300" />

          {/* 5. التواصل */}
          <section className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-[#38BA98] mb-4">{t.contactUs}</h2>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <span>📩</span> <span className="font-bold">{t.emailLabel}:</span> 
                <a href="mailto:Shammsup@gmail.com" className="hover:underline text-[#38BA98]">Shammsup@gmail.com</a>
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span> <span className="font-bold">{t.phoneLabel}:</span> 
                <span dir="ltr">+963 959 746 800</span>
              </p>
            </div>
          </section>
        </div>
      </main>

    </div>
  );
}