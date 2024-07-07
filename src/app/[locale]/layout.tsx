import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import React from 'react';
import Providers from '@/lib/Providers';
import GlobalStyles from '@/styles/GlobalStyles';
import type { Metadata } from 'next';
import {Footer, Header} from '@/components';

export const metadata: Metadata = {
  title: 'Celsius',
  description: 'Celsius',
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <GlobalStyles />
              <Header />
              {children}
              <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
