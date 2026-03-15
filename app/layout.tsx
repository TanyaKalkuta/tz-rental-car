import type { Metadata } from 'next';
import 'modern-normalize/modern-normalize.css';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'RentalCar',
  description: 'Reliable and budget-friendly rentals for any journey',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable}`}>
        {/* <TanStackProvider> */}
        {/* <AuthProvider> */}
        <Header />
        {children}
        {/* </AuthProvider> */}
        {/* </TanStackProvider> */}
      </body>
    </html>
  );
}
