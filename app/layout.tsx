import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { StateContext } from "@/context/StateContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Denya W' Decor — E-commerce",
  description: "A modern and elegant shopping experience built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <StateContext>
          <Navbar />
          <main className="min-h-screen relative">
            {children}
            <ScrollToTop />
          </main>
          <Footer />
          <Toaster position="top-right" />
        </StateContext>
      </body>
    </html>
  );
}
