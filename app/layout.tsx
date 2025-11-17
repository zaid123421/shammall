import type { Metadata } from "next";
import "./globals.css";
import { Cairo } from 'next/font/google'

const cairo = Cairo({
  weight: ['200','300','400','500','600','700','800','900'],
  subsets: ['latin', 'arabic'],
})

export const metadata: Metadata = {
  title: "Shammall",
  description: "Shammall يجمع كل الأسواق في مكان واحد بتجربة شرقية أصيلة. استمتع بتصفح خدماتنا بسهولة عبر التطبيق، مع أقسام متنوعة، تصميم عربي جذاب، سرعة التوصيل وسهولة الدفع.",
  icons: undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${cairo.className} scroll-smooth`}>
      <body>
        {children}
      </body>
    </html>
  );
}
