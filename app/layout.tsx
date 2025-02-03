import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainNav from "@/src/provider/main";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Slash Board",
  description: "slashboard هو أكثر من مجرد قطعة ديكور. صُنع في مصر بتصميم إيطالي أصيل، ليمنح منزلك لمسة من الفخامة والأناقة. مصنوع من أجود الخامات، وهو مقاوم للماء والحرارة والصدمات، مما يضمن لك متانة تدوم طويلاً",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <MainNav>{children}</MainNav>
      </body>
    </html>
  );
}
