import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import React from 'react';
import Providers from '@/lib/Providers';
import GlobalStyles from '@/styles/GlobalStyles';
import type { Metadata } from 'next';
import { Footer, Header } from '@/components';
import { type Locale, locales } from '@/i18n.config';
import { unstable_setRequestLocale } from 'next-intl/server';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

export const metadata: Metadata = {
  title: 'Korpus',
  description: 'Korpus description',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <AppRouterCacheProvider options={{ key: 'css' }}>
            <Providers>
              <GlobalStyles />
              <Header />
              {children}
              <Footer />
            </Providers>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
