import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Aside } from '@/components/Aside';
import { Header } from '@/components/Header';
import { Inter } from 'next/font/google'
import { cn } from '@/components/lib/utils';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume page for frondend dev",
};

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(geistSans.variable, geistMono.variable, inter.className, 'antialiased max-w-[1240px] mx-auto p-4 grid grid-cols-[27%_1fr] grid-rows-[auto_1fr] gap-8 gap-y-4')}
      >
        <Aside />
        <Header />
        {children}
      </body>
    </html>
  );
}
