import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Layout from "@/components/layout";
import { i18n, Locale } from "@/i18n/i18n-config";
import { getDictionary } from "@/i18n/get-dictionary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anemon Labs",
  description: "Web software developer",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body
        className={`text-foreground bg-background antialiased ${inter.className}`}
      >
        <Providers>
          <Layout dictionary={dictionary["layout"]} locale={params.lang}>
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
