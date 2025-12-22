import type { Metadata } from "next";
import "./globals.css";
import AppInfoData from "../_data/sample/AppInfoData.json";
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";
import ChatBox from "@/_components/ChatBox";
/* ToastContainer */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
        <ChatBox />
         <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark" 
          />
      </body>
    </html>
  );
}
