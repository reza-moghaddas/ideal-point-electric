import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing, type Locale} from '../../lib/routing';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  title: {
    default: 'Ideal Point Electric | Vancouver Electrical Contractor',
    template: '%s | Ideal Point Electric',
  },
  description:
    'Licensed electrical contractor serving luxury residential, commercial and multifamily projects across Vancouver and the North Shore.',
  metadataBase: new URL('https://www.idealpointelectric.ca'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const validLocale = locale as Locale;

  setRequestLocale(validLocale);

  const messages = await getMessages();

  return (
    <html lang={validLocale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}