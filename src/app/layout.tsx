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
  title: "Zaid Rehman — AI Engineer | Backend Engineer",
  description:
    "AI Engineer based in Dhaka with experience in LLM-powered automation and API-first backend system delivery.",
  keywords: [
    "AI Engineer",
    "Backend Engineer",
    "RAG",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "Zaid Rehman",
  ],
  openGraph: {
    title: "Zaid Rehman — AI Engineer | Backend Engineer",
    description:
      "AI Engineer with 1 year of experience delivering LLM-powered automation and backend systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body suppressHydrationWarning className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
