import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yogizogi',
  description: 'For quick comparision and reservation.',
  icons: {
    icon: './icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko-KR">
      <body className={inter.className}>
        <div className="relative min-w-[375px] w-100vw">
          <Header />
          <main className="pt-[68px]">{children}</main>
        </div>
      </body>
    </html>
  );
}
