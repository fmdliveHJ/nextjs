import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });
import styles from './layout.module.css';
export const metadata: Metadata = {
  title: '멋진 제품 사이트 ',
  description: '멋진 제품 판매',
};

export default function ProdutctsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href='/products/women'>여성옷</Link>
        <Link href='./products/men'>남성옷</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
