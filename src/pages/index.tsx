import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Osama akb</title>
        <meta name="osama akb" content="osama profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="m-16">
        <Image
          src="/itisOsamatext.png"
          alt="it is osama"
          height={40}
          width={200}
          objectFit="contain"
          layout="intrinsic"
        />
        <p className="text-3xl leading-snug my-3">
          I’m an Iraqi software engineer living and working in Istanbul. I love
          creating courses, writing blogs, and speaking at conferences.
        </p>
        <Link href="/about">
          <a className="text-gray-400 underline">More about me?</a>
        </Link>
      </div>
    </div>
  );
}
