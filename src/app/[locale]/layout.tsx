import MainLayout from "@/components/layout/MainLayout";
import AppProviders from "@/providers";
import { Roboto } from "next/font/google";
import { getTranslations } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { LanguageType } from "@/types/language";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "vietnamese"],
});

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: LanguageType };
};

export async function generateMetadata({ params: { locale } }: RootLayoutProps) {
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: t("title"),
  };
}

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          <AppProviders lng={locale}>{children}</AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
