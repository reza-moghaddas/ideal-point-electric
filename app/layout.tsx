import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Ideal Point Electric | Vancouver Electrical Contractor',
    template: '%s | Ideal Point Electric',
  },
  description:
    'Ideal Point Electric provides premium electrical services for luxury residential, commercial, and multifamily projects in Vancouver and the North Shore.',
  metadataBase: new URL('https://ideal-point-electric.vercel.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}