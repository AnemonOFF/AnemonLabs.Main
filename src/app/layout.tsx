import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anemon Labs",
  description: "Web software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.className}`}>
        <Providers>
          <div className="min-h-screen bg-background grid grid-rows-1 grid-cols-[auto_1fr]">
            <Sidebar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
