import type { Metadata } from "next";
import "./globals.css";
import AppInfoData from "../_data/sample/AppInfoData.json";
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";



export const metadata: Metadata = {
  title: AppInfoData.name,
  description: AppInfoData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased `} >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
