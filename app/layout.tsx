import '@/app/ui/global.css';
import React from 'react';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | NextJS Tutorial',
    default: 'NextJS Tutorial',
  },
  description:
    'This metadata provides a brief overview of the webpage content and is often displayed in search engine results.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="keywords"
        content="keyword1, keyword2, keyword3, these, words, help, search, engines, optimize, results"
      />
      <meta property="og:title" content="Social media title" />
      <meta property="og:description" content="Social media description" />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
