'use client';

import { useEffect, useState, useMemo } from "react";
import { translations } from "@/constants/translations";
import Header from "@/components/Header";

export default function PrivacyPage() {
  const [lang, setLang] = useState<"ar" | "en">("en");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("app_lang") as "ar" | "en";
    const hasVisited = sessionStorage.getItem("visited_privacy_page");

    const timer = setTimeout(() => {
      let targetLang: "ar" | "en" = "en";

      if (!hasVisited) {
        targetLang = "en";
        localStorage.setItem("app_lang", "en");
        sessionStorage.setItem("visited_privacy_page", "true");
      } else if (savedLang) {
        targetLang = savedLang;
      }

      setLang(targetLang);
      setIsClient(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleLangChange = (newLang: "ar" | "en") => {
    setLang(newLang);
    localStorage.setItem("app_lang", newLang);
  };

  const t = useMemo(() => translations[lang], [lang]);
  const isAr = lang === 'ar';

  if (!isClient) return <div className="min-h-screen bg-white" />;

  return (
    <>
      <Header
        t={t}
        lang={lang}
        setLang={handleLangChange}
        simpleMode={true} 
      />
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

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[#38BA98]">{t.section1}</h2>
              
              <h3 className="text-xl font-semibold border-s-4 border-[#38BA98] px-3">{t.customerInfo}</h3>
              <p>{t.customerInfoTitle}</p>
              <ul className={`list-disc space-y-1 ${isAr ? 'pr-8' : 'pl-8'}`}>
                {t.customerData.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <hr className="my-10 border-gray-300" />

              <h3 className="text-xl font-semibold border-s-4 border-[#38BA98] px-3 mt-6">{t.sellerInfo}</h3>
              <p>{t.sellerInfoTitle}</p>
              <ul className={`list-disc space-y-1 ${isAr ? 'pr-8' : 'pl-8'}`}>
                {t.sellerData.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="bg-gray-50 p-4 rounded-md text-md">{t.privacyNote}</p>
              <p className="bg-gray-50 p-4 rounded-md text-md">{t.privacyNote2}</p>
            </section>

            <hr className="my-10 border-gray-300" />

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

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#38BA98]">{t.section3}</h2>
              <p className="font-semibold">{t.noSell}</p>
              <h2 className="font-bold text-xl">{t.sharingNote}</h2>

              <p>{t.sharingNote2}</p>
              <p>{t.sharingNote3}</p>
            </section>

            <hr className="my-10 border-gray-300" />

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#38BA98]">{t.section4}</h2>
              <p>{t.paymentNote1}</p>
              <p>{t.paymentNote2}</p>
            </section>

            <hr className="my-10 border-gray-300" />

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#38BA98]">{t.section5}</h2>
              <p>{t.dataProtectionText}</p>
            </section>

            <hr className="my-10 border-gray-300" />

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#38BA98]">{t.retentionTitle}</h2>
              <p>{t.retentionDesc}</p>
            </section>

            <hr className="my-10 border-gray-300" />

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#38BA98]">{t.permissionsTitle}</h2>
              <p>{t.permissionsIntro}</p>
              <ul className={`list-disc space-y-2 ${isAr ? 'pr-8' : 'pl-8'}`}>
                {t.permissionsList.map((permission, index) => (
                  <li key={index}>{permission}</li>
                ))}
              </ul>
            </section>

            <hr className="my-10 border-gray-300" />

            {/* <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#38BA98]">{t.cookiesTitle}</h2>
              <p>{t.cookiesDesc}</p>
            </section> */}

            {/* <hr className="my-10 border-gray-300" /> */}

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#38BA98]">{t.childrenPrivacyTitle}</h2>
              <p>{t.childrenPrivacyDesc}</p>
              <p>{t.childrenPrivacyDesc2}</p>
            </section>

            <hr className="my-10 border-gray-300" />

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#38BA98]">{t.policyChangesTitle}</h2>
              <p>{t.policyChangesDesc}</p>
            </section>

            <hr className="my-10 border-gray-300" />

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#38BA98] mb-4">{t.contactUs}</h2>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row items-center gap-2 bg-gray-50 p-3 rounded-lg sm:bg-transparent">
                  <span>📩</span>
                  <span className="font-bold">{t.emailLabel}:</span> 
                  <a href="mailto:Shammsup@gmail.com" className="hover:underline text-[#38BA98]">Shammsup@gmail.com</a>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-2 bg-gray-50 p-3 rounded-lg sm:bg-transparent">
                  <span>📞</span>
                  <span className="font-bold">{t.phoneLabel}:</span> 
                  <span dir="ltr">+963 959 746 800</span>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}