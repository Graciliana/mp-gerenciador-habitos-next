import type { Metadata } from "next";
import { Dosis, Inter } from "next/font/google";

import "./globals.css";
import Image from 'next/image'

const dosis = Dosis({ subsets: ["latin"], variable: "--font-dosis" });
const inter = Inter({ subsets: ["latin"],variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Meta Diária -Gerenciador de habitos",
  description: "Gerencie seus hábitos na palma da sua mão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dosis.variable} ${inter.className} bg-neutral-900`}>
        <div className=" flex justify-center">
          <div className="py-2 items-center"> <Image src="/images/logo.svg" width={82} height={82} alt="logo - meta diária" /></div>
          <div className="py-2 text-8xl font-bold  inline-block align-middle text-white"><h3>meta.</h3> </div>
          <div className="py-2 text-8xl font-bold  inline-block align-middle text-[#45EDAD]"><h3>diária</h3></div>
        </div>
      </body>
    </html>
  );
}
