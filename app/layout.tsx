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
  metadataBase: new URL("https://lumenchen.com"),
  title: "Lumen Chen | Computer Science",
  description:
    "Computer Science undergraduate interested in Natural Language Processing, Large Language Models, and Human-Centered AI.",
  keywords: [
    "Computer Science",
    "Natural Language Processing",
    "Large Language Models",
    "Human-Centered AI",
    "Machine Learning",
  ],
  openGraph: {
    title: "Lumen Chen | Computer Science",
    description:
      "Computer Science undergraduate interested in Natural Language Processing, Large Language Models, and Human-Centered AI.",
    type: "website",
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
