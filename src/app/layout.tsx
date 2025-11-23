import type { Metadata } from "next";
// import { Geist_Mono } from "next/font/google";
import "../app/globals.css";
import { lustria } from "@/fonts/lustria";
import Navbar from "@/components/common/navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Mosam FarmStays",
  description:
    "A beautiful British-style wooden cottage in Nashik, offering cozy comfort, natural surroundings, and a peaceful escape from the city",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lustria.variable} antialiased`}>
        <Navbar />
        <main className="pt-8">{children}</main>
      </body>
    </html>
  );
}
