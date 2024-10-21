import "./globals.css";
import type { Metadata } from "next";
import { Syne, Raleway } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Ayush Gharat",
  description: "This is Ayush Gharat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${syne.variable} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  );
}
