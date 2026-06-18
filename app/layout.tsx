import type { Metadata } from "next";
import { Scheherazade_New } from "next/font/google";
import "./globals.css";

const scheherazade = Scheherazade_New({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: "Taheri Mohallah Karachi",
  description: "Community departments display website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${scheherazade.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}