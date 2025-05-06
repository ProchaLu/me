import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import Navbar from './Navbar';

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div>{children}</div>
        <footer className="fixed bottom-0 left-0 right-0 flex justify-center items-center h-20">
          <div className="text-sm">
            © {new Date().getFullYear()} Lukas Prochazka
          </div>
        </footer>
      </body>
    </html>
  );
}
