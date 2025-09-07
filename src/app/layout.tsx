// src/app/layout.tsx

import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Providers from './providers'; // Import komponen Providers

export const metadata: Metadata = {
  title: 'My - Blog',
  description: 'Stay informed with product updates, company news, and insights on how to sell smarter at your company.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased overflow-x-hidden">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}