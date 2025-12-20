import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chanhee Lee - Postdoctoral Researcher | Computer Science",
  description: "Chanhee Lee's professional resume and portfolio. Postdoctoral Researcher at University of Central Florida specializing in CXL, Software Platforms, and On-device Large Language Models.",
  keywords: ["Chanhee Lee", "Computer Science", "CXL", "LLMs", "Software Platforms", "Resume", "Portfolio"],
  authors: [{ name: "Chanhee Lee" }],
  openGraph: {
    title: "Chanhee Lee - Postdoctoral Researcher",
    description: "Professional resume and portfolio of Chanhee Lee",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
