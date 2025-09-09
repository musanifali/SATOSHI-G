import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./ClientWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "SATOSHI - Simplifying Your Real Estate Journey",
  description: "Building the region's leading real estate ecosystem. We enable Real Estate Freedom for everyone with mortgage, blocks, and golden visa services.",
  keywords: ["real estate", "mortgage", "property investment", "golden visa", "UAE real estate", "SATOSHI"],
  authors: [{ name: "SATOSHI" }],
  robots: "index, follow",
  openGraph: {
  title: "SATOSHI - Simplifying Your Real Estate Journey",
    description: "Building the region's leading real estate ecosystem. We enable Real Estate Freedom for everyone.",
    type: "website",
    locale: "en_US",
  },
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
