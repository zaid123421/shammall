'use client';

import { useEffect, useState } from "react";
import { translations } from "@/constants/translations";

export default function PrivacyPage() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("app_lang") as "ar" | "en";
    if (savedLang) {
      setLang(savedLang);
    }
    setIsReady(true);
  }, []);

  if (!isReady) return null;

  const t = translations[lang];
  const isAr = lang === 'ar';

  return (
    <div className="flex flex-col min-h-screen">
      <main 
        dir={isAr ? "rtl" : "ltr"} 
        className={`flex-grow pt-32 pb-16 container mx-auto px-6 text-gray-800 leading-8 text-lg ${isAr ? 'text-right' : 'text-left'}`}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-[#38BA98] mb-8 text-center">
          {t.privacyTitle}
        </h1>

        <div className="max-w-4xl mx-auto space-y-6">
          <p className="mb-6">{t.privacyIntro}</p>

          <hr className="my-10 border-gray-300" />

          {/* 1. المعلومات التي نجمعها */}
          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-[#38BA98]">{t.section1}</h2>
            
            <h3 className="text-xl font-semibold border-s-4 border-[#38BA98] px-3">{t.customerInfo}</h3>
            <ul className={`list-disc space-y-1 ${isAr ? 'pr-8' : 'pl-8'}`}>
              {t.customerData.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold border-s-4 border-[#38BA98] px-3 mt-6">{t.sellerInfo}</h3>
            <ul className={`list-disc space-y-1 ${isAr ? 'pr-8' : 'pl-8'}`}>
              {t.sellerData.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="bg-gray-50 p-4 rounded-md italic text-sm">{t.privacyNote}</p>
          </section>

          <hr className="my-10 border-gray-300" />

          {/* 2. كيفية استخدام البيانات */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#38BA98]">{t.section2}</h2>
            <p>{t.useDataIntro}</p>
            <ul className={`list-disc space-y-1 ${isAr ? 'pr-8' : 'pl-8'}`}>
              {t.useDataList.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <hr className="my-10 border-gray-300" />

          {/* 3. مشاركة البيانات */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#38BA98]">{t.section3}</h2>
            <p>{t.shareDataIntro}</p>
            <ul className={`list-disc space-y-1 ${isAr ? 'pr-8' : 'pl-8'}`}>
              {t.shareDataList.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="font-semibold text-[#189172]">{t.noSell}</p>
          </section>

          <hr className="my-10 border-gray-300" />

          {/* 4. حماية البيانات */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#38BA98]">{t.section4}</h2>
            <p>{t.protectionText}</p>
          </section>

          <hr className="my-10 border-gray-300" />

          {/* 5. حقوق المستخدم */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#38BA98]">{t.section5}</h2>
            <ul className={`list-disc space-y-1 ${isAr ? 'pr-8' : 'pl-8'}`}>
              {t.rightsList.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <hr className="my-10 border-gray-300" />

          {/* 6. الاحتفاظ بالبيانات (تمت إضافتها مباشرة لأنها ثابتة المحتوى) */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#38BA98]">
              {isAr ? "6. الاحتفاظ بالبيانات" : "6. Data Retention"}
            </h2>
            <p>
              {isAr 
                ? "نحتفظ بالبيانات طوال فترة تشغيل الحساب وللفترة القانونية الضرورية." 
                : "We retain data as long as the account is active and for the necessary legal period."}
            </p>
          </section>

          <hr className="my-10 border-gray-300" />
          {/* 7. أذونات التطبيق - App Permissions */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#38BA98]">
              {isAr ? "7. أذونات التطبيق" : "7. App Permissions"}
            </h2>
            <p>{isAr ? "قد يطلب التطبيق أذونات مثل:" : "The application may request permissions such as:"}</p>
            <ul className={`list-disc space-y-2 ${isAr ? 'pr-8' : 'pl-8'}`}>
              <li>{isAr ? "الوصول للكاميرا (لالتقاط صور الهوية أو المنتجات)" : "Camera access (to capture identity or product images)"}</li>
              <li>{isAr ? "الوصول للملفات (تحميل صور المنتجات)" : "File access (to upload product images)"}</li>
              <li>{isAr ? "تحديد الموقع (لأغراض التوصيل)" : "Location access (for delivery purposes)"}</li>
            </ul>
            <p className="mt-2">
              {isAr 
                ? "جميع الأذونات تُستخدم فقط لتفعيل الميزات المطلوبة ولا يتم الوصول إليها دون موافقة المستخدم." 
                : "All permissions are used only to enable requested features and are not accessed without user consent."}
            </p>
          </section>

          <hr className="my-10 border-gray-300" />

          {/* 8. ملفات الارتباط - Cookies */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#38BA98]">
              {isAr ? "8. ملفات الارتباط (Cookies)" : "8. Cookies"}
            </h2>
            <p>
              {isAr 
                ? "قد نستخدم الكوكيز أو تقنيات مشابهة لتحسين الأداء ودعم الخدمات. يمكن للمستخدم إيقافها من إعدادات الجهاز." 
                : "We may use cookies or similar technologies to improve performance and support services. Users can disable them through device settings."}
            </p>
          </section>

          <hr className="my-10 border-gray-300" />

          {/* 9. خصوصية الأطفال - Children's Privacy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#38BA98]">
              {isAr ? "9. خصوصية الأطفال" : "9. Children’s Privacy"}
            </h2>
            <p>
              {isAr 
                ? "التطبيق غير مخصص للأطفال دون سن 13 عامًا، ولا نجمع بياناتهم الشخصية عن قصد." 
                : "The application is not intended for children under the age of 13, and we do not knowingly collect their personal data."}
            </p>
          </section>

          <hr className="my-10 border-gray-300" />

          {/* 10. تعديل السياسة - Changes to Policy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#38BA98]">
              {isAr ? "10. تعديل سياسة الخصوصية" : "10. Changes to This Privacy Policy"}
            </h2>
            <p>
              {isAr 
                ? "قد نقوم بتحديث هذه السياسة عند الضرورة. سيتم إخطار المستخدمين بأي تغييرات جوهرية." 
                : "We may update this policy when necessary. Users will be informed of any material changes."}
            </p>
          </section>

          {/* معلومات التواصل (القسم 11) */}
          <section className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-[#38BA98] mb-4">{t.contactUs}</h2>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <span>📩</span>
                <span className="font-bold">{t.emailLabel}:</span> 
                <a href="mailto:Shammsup@gmail.com" className="hover:underline text-[#38BA98]">Shammsup@gmail.com</a>
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <span className="font-bold">{t.phoneLabel}:</span> 
                <span dir="ltr">+963 959 746 800</span>
              </p>
            </div>
          </section>
        </div>
      </main>

    </div>
  );
}