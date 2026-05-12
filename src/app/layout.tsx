import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-headline",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  openGraph: {
    title: "MS Green Solar | Power Your Home. Own Your Energy.",
    description: "Residential & commercial solar solutions. 15+ years of experience, 25 MW installed, 5,000+ happy customers. Get your free quote today.",
    url: "https://www.msgreensolar.com",
    siteName: "MS Green Solar",
    images: [{ url: "https://www.msgreensolar.com/og-image.jpg" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "MS Green Solar | Power Your Home. Own Your Energy.",
    description: "Residential & commercial solar solutions. Get your free quote today.",
    images: ["https://www.msgreensolar.com/og-image.jpg"]
  },
  title: "MS Green Solar | Power Your Home. Own Your Energy.",
  description:
    "Residential & commercial solar solutions. 15+ years of experience, 25 MW installed, 5,000+ happy customers. Get your free quote today.",
  keywords: [
    "solar panels",
    "solar energy",
    "residential solar",
    "commercial solar",
    "battery storage",
    "solar installation",
    "MS Green Solar",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>☀️</text></svg>"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,0..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${manrope.variable} font-body antialiased bg-surface text-on-surface`}
      >
        {children}
      </body>
    </html>
  );
}
