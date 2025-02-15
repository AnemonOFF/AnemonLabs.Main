import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Layout from "@/components/layout";
import { i18n, Locale } from "@/i18n/i18n-config";
import { getDictionary } from "@/i18n/get-dictionary";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anemon Labs",
  description: "Web software developer",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: Locale }>;
  }>
) {
  const params = await props.params;

  const { children } = props;

  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body
        className={`text-foreground bg-background antialiased ${inter.className}`}
      >
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="ebe8c207-f4ff-492e-995e-e003c91bc855"
        ></Script>
        <Providers>
          <div className="absolute inset-0 max-lg:top-32 overflow-hidden blur-3xl">
            <div className="absolute -top-10 left-[20%] h-48 w-96 bg-emerald-400/20 rounded-full" />
            <div className="absolute bottom-[15%] right-[5%] w-96 h-32 rotate-12 bg-emerald-400/20 rounded-full" />
          </div>
          <div className="relative">
            <Layout dictionary={dictionary["layout"]} locale={params.lang}>
              {children}
            </Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
