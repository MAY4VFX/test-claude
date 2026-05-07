import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.kicker}`,
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} — ${profile.kicker}`,
    description: profile.tagline,
    type: "website",
    images: [
      {
        url: profile.heroImage.src,
        alt: profile.heroImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.kicker}`,
    description: profile.tagline,
    images: [profile.heroImage.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sand-50 text-stone-900 font-sans">
        {children}
      </body>
    </html>
  );
}
