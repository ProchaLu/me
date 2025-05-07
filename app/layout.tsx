import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import Footer from './Footer';
import Navigation from './Navigation';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Lukas Prochazka | Portfolio',
  description: 'My personal portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen max-h-screen`}
      >
        <Navigation />
        <main className="flex-1 bg-white p-4 overflow-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
