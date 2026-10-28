import "./globals.css";

import { Figtree, Syncopate, Unbounded } from "next/font/google";

import { ReactNode } from "react";

import { NextIntlClientProvider } from "next-intl";
import { getTranslations, getMessages } from "next-intl/server";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/app/providers/ThemeProvider";

const figtree = Figtree({ subsets: ["latin", "latin-ext"], variable: "--font-sans" });
// Open-licence stand-ins for Stretch Pro (wordmark) and Monumental (headlines).
// To use the licensed fonts, replace these two with next/font/local and keep the same variable names.
const wordmark = Syncopate({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-wordmark" });
const display = Unbounded({ subsets: ["latin", "latin-ext"], variable: "--font-display" });

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;

  const { locale } = params;

  const t = await getTranslations({ locale, namespace: "RootLayout" });

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
    title: t("title"),
    description: t("description"),
    twitter: {
      card: "summary_large_image",
    },
  };
}

export const viewport = {
  themeColor: "#CE0054",
};

export default async function RootLayout(props: Props) {
  const params = await props.params;

  const { locale } = params;

  const { children } = props;

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${figtree.variable} ${wordmark.variable} ${display.variable} font-sans min-h-screen`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
        <Toaster />
        <SonnerToaster />
      </body>
    </html>
  );
}
