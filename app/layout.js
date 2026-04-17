import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Портфолио разработчика | Евгений Варваштян",
  description: "Персональное портфолио Full-Stack разработчика. Проекты, навыки и опыт работы.",
  keywords: ["портфолио", "разработчик", "frontend", "backend", "React", "Next.js", "JavaScript"],
  authors: [{ name: "Евгений Варваштян" }],
  openGraph: {
    title: "Портфолио разработчика | Евгений Варваштян",
    description: "Персональное портфолио Full-Stack разработчика.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={inter.variable}>
      <body style={{ fontFamily: 'var(--font-inter), sans-serif' }}>{children}</body>
    </html>
  );
}
