import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vivek Ribadiya — CS Student & AI Builder",
  description:
    "Vivek Ribadiya is a Computer Science student in Mumbai building web apps, AI chatbots, and browser extensions using AI-assisted workflows. Open to internships.",
  keywords: [
    "Vivek Ribadiya",
    "CS student",
    "Mumbai",
    "AI builder",
    "portfolio",
    "web developer",
    "internship",
  ],
  openGraph: {
    title: "Vivek Ribadiya — CS Student & AI Builder",
    description: "Building things with AI before fully knowing how. CS student at NKC, Mumbai.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Ribadiya — CS Student & AI Builder",
    description: "Building things with AI before fully knowing how.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-inter" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
