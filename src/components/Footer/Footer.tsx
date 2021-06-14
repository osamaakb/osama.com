import React from "react";
import SocialIcons from "../SocialIcons";
export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="my-32 flex justify-center">
      <SocialIcons black />
    </div>
  );
};

export default Footer;
