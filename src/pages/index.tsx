import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="osama akb" content="osama profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-lg">Hey Its Osama</p>
    </div>
  );
}
