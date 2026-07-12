import { Manrope, Noto_Sans_Thai, IBM_Plex_Mono } from "next/font/google";

/**
 * Corporate type stack (brief §03). One heading/body family (Manrope) with a
 * Thai companion (Noto Sans Thai) and a mono for labels/placeholders only.
 * `display: swap` for fast, layout-stable font loading (brief §11).
 */
export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const notoThai = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-thai",
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const fontVariables = `${manrope.variable} ${notoThai.variable} ${plexMono.variable}`;
