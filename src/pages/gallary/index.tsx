import Head from "next/head";
import Image from "next/image";
import React from "react";
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
          alt="personal picture"
          className="w-full h-full mb-3"
        />
      </div>
      {/* <div className="flex flex-wrap gap-3">
        <img
          src="/gallary/taksim.jpg"
          className="object-contain h-full flex-grow"
          style={{ verticalAlign: "bottom" }}
        />
        <img
          src="/gallary/ferry.jpg"
          className="object-contain h-full flex-grow"
          style={{ verticalAlign: "bottom" }}
        />
      </div> */}

      <ul className="flex flex-wrap gap-3">
        <li className="flex-grow">
          <img
            src="/gallary/taksim.jpg"
            className="min-w-full object-contain max-h-full"
            style={{ verticalAlign: "bottom" }}
          />
        </li>
        <li className="flex-grow">
          <img
            src="/gallary/ferry.jpg"
            className="min-w-full object-contain max-h-full"
            style={{ verticalAlign: "bottom" }}
          />
        </li>
      </ul>
    </div>
  );
};

export default Gallary;

{
  /* <div className="flex flex-wrap">
<div style={{ flex: "50%", maxWidth: "50%" }}>
  <img
    src="/gallary/ferry.jpg"
    className=" w-full"
    style={{ verticalAlign: "middle" }}
  />
  <img src="/gallary/taksim.jpg" className="object-contain w-full" />
</div>
<div style={{ flex: "50%", maxWidth: "50%" }}>
  <img
    src="/gallary/taksim.jpg"
    className="w-full"
    style={{ verticalAlign: "middle" }}
  />
</div>
</div> */
}
