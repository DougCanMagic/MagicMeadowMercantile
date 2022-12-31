import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Image
        src='/mmf_icon_alpha.png'
        alt='Magic Meadow Farm logo'
        width={100}
        height={100}
      />
      <h1>Magic Meadow Farm</h1>
    </>
  );
}
