import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clasa",
  description: "Clasa Lions",
  verification: {
    google: "PVJR8pZNDCbR9Oa9gmldKB7NeDNvK37806VA_-Z2XgI",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative h-full overflow-hidden">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
