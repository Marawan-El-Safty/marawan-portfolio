import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { PROFILE } from "@/lib/data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: `${PROFILE.name} — ${PROFILE.role}`,
  description: PROFILE.tagline,
  keywords: [
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Freelance Web Developer",
    "Marawan Elsafty",
  ],
  authors: [{ name: PROFILE.name }],
  openGraph: {
    title: `${PROFILE.name} — ${PROFILE.role}`,
    description: PROFILE.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${display.variable} font-sans grain`}>
        {children}
      </body>
    </html>
  );
}
