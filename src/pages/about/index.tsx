import React from "react";
import Navbar from "../../components/Navbar";

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div>
      <Navbar black />
      about page
    </div>
  );
};

export default About;
