import './globals.css';
import { Inter } from 'next/font/google';
import styles from './layout.module.css';
import Link from 'next/link';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '멋진 제품 사이트 ',
  description: '멋진 제품 판매',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className={styles.header}>
          <h1>데모 </h1>
          <nav className={styles.nav}>
            <Link href='/products'>Products</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/about'>About</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
