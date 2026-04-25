import type { Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const calistoga = Calistoga({
  variable: "--font-calistoga",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Zaid Rehman — Junior AI Solutions Engineer | Backend Engineer",
  description:
    "Junior AI Solutions Engineer based in Dhaka with experience in LLM-powered automation and API-first backend system delivery.",
  keywords: [
    "Junior AI Solutions Engineer",
    "Backend Engineer",
    "RAG",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "Zaid Rehman",
  ],
  openGraph: {
    title: "Zaid Rehman — Junior AI Solutions Engineer | Backend Engineer",
    description:
      "Junior AI Solutions Engineer with 1 year of experience delivering LLM-powered automation and backend systems.",
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
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${calistoga.variable} scroll-smooth`}
    >
      <body suppressHydrationWarning className="min-h-screen antialiased">
        <Script id="theme-init" strategy="beforeInteractive">{`
          (function () {
            try {
              var savedTheme = localStorage.getItem("theme");
              var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              var theme = savedTheme === "light" || savedTheme === "dark"
                ? savedTheme
                : (systemDark ? "dark" : "light");
              document.documentElement.setAttribute("data-theme", theme);
            } catch (e) {}
          })();
        `}</Script>
        {children}
      </body>
    </html>
  );
}
