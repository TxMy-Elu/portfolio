import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';




export const metadata: Metadata = {
  title: "Tom DOGUET - Portfolio",
  description: "Portfolio de Tom DOGUET, développeur web full-stack",
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
      </body>
    </html>
  );
}
