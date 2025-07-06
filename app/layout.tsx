import type { Metadata } from "next";
import {Outfit} from "next/font/google";
import Header from "@/app/components/Header/page"
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Piyush",
  description: "Portfolio of fullstack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit} antialiased`}
        style={{backgroundColor: 'black', color: 'white'}}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
