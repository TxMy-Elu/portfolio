import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "Tom DOGUET - Portfolio",
  description: "Portfolio de Tom DOGUET, développeur web full-stack",
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
        style={
          {fontFamily: "var(--font-syne)"}
  }
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
