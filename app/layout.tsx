import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://jahythepmp.vercel.app"),
  title: {
    default: "JAHY | The Duke of Web3",
    template: "%s | JAHY",
  },
  description:
    "Jahmiel Okon — Web3 ecosystem growth contributor and analyst exploring DeFi, protocol strategy, and sustainable ecosystem growth.",
  openGraph: {
    title: "JAHY | The Duke of Web3",
    description:
      "Exploring DeFi, protocol strategy, and Web3 ecosystem growth.",
    siteName: "JAHY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JAHY | The Duke of Web3",
    description:
      "Web3 ecosystem growth, DeFi analysis, and protocol strategy.",
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
