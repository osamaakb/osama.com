import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="osama akb" content="osama profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hello there, it&lsquo;s Osama
    </div>
  );
}
