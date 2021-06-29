import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export interface GallaryProps {}

const Gallary: React.FC<GallaryProps> = () => {
  return (
    <div>
      <Head>
        <title>Gallary</title>
      </Head>
      <div className="absolute left-0 right-0">
        <Navbar />
      </div>
      <div>
        <img
          src="/gallary/mountains.jpg"
          alt="mountains"
          className="w-full h-full mb-2"
        />
      </div>
      <ul className="lg:flex md:flex sm:block block flex-nowrap gap-2 justify-between">
        <li className="flex-grow sm:pb-2 pb-2 md:py-0 lg:py-0">
          <img
            src="/gallary/taksim.jpg"
            className="object-contain w-full h-full"
            style={{ verticalAlign: "bottom" }}
            alt="taksim street"
          />
        </li>
        <li className="flex-grow">
          <img
            src="/gallary/ferry.jpg"
            className="object-contain w-full h-full"
            alt="ferry"
            style={{ verticalAlign: "bottom" }}
          />
        </li>
      </ul>
      <div>
        <img
          src="/gallary/ayasofia.jpg"
          alt="aya sofia mosque"
          className="my-2 w-full h-full"
        />
      </div>
      <ul className="lg:flex md:flex sm:block block flex-nowrap gap-2 justify-between">
        <li className="flex-grow  sm:pb-2 pb-2 md:pb-0 lg:pb-0">
          <img
            src="/gallary/sky.jpg"
            className="object-contain w-full h-full"
            style={{ verticalAlign: "bottom" }}
            alt="purple sky"
          />
        </li>
        <li className="flex-grow">
          <img
            src="/gallary/street.jpg"
            className="object-contain w-full h-full"
            alt="street and people"
            style={{ verticalAlign: "bottom" }}
          />
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default Gallary;
