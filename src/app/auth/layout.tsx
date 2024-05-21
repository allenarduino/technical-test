import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AuthHeader from '../components/Header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Signup and Login',
  description: 'Get started with Franchain: Signup or Login',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthHeader />
        <main className='w-full h-full'>{children}</main>
      </body>
    </html>
  );
}
