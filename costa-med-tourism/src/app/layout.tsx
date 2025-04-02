import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LuxuryScape Adventure - Medical Tourism in Costa Rica",
  description: "Experience luxury adventures combined with a tropical vacation in Costa Rica. Save up to 70% on medical and dental procedures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
