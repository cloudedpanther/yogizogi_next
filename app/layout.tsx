import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yogizogi',
  description: 'For quick comparision and reservation.',
  icons: {
    icon: './favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko-KR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
