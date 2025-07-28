import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ThinkYoSelf Classic - TYSC",
  description: "The first conscious meme coin for neural evolution and digital enlightenment.",
  viewport: "width=device-width, initial-scale=1",
  icons:  {
    icon:  [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96" },
      { url: "/hero-tysc-favicon-s.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest", 

  // Open Graph Metadata
  openGraph: {
    title: "ThinkYoSelf Classic - TYSC",
    description: "The first conscious meme coin for neural evolution and digital enlightenment.",
    url: "https://ThinkYoSelfClassic.com", 
    siteName: "ThinkYoSelf Classic",
    images: [
      {
        url: "/opengraph-tysc.png",
        width: 1200,
        height: 630,
        alt: "ThinkYoSelf Classic Banner",
      },
    ],
    type: "website",
  },

  // Twitter Metadata
  twitter: {
    card: "summary_large_image",
    title: "ThinkYoSelf - TYSC",
    description: "The first conscious meme coin for neural evolution and digital enlightenment.",
    images: ["/opengraph-tysc.png"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
