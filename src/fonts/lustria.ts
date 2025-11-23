import localFont from "next/font/local";
import { Inter_Tight } from "next/font/google";

export const lustria = localFont({
  src: "./lustria.woff2",
  variable: "--font-lustria",
  weight: "400",
  style: "normal",
});


export const inter = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["300", "400", "500", "600", "700"],
})