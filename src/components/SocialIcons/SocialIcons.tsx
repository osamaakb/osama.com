import * as React from "react";
import { socialIconsData } from "../../data/SocialIconsData";
import Link from "next/link";

export interface SocialIconsProps {
  black?: boolean;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ black }) => {
  const color = black ? "text-primary" : "text-white";
  return (
    <>
      {socialIconsData.map(({ Icon, path }, iconIdx) => {
        return (
          <div key={iconIdx} className="mx-2">
            <a href={path}>
              <Icon
                className={`${color} hover:opacity-50 duration-300`}
                height={24}
                width={24}
              />
            </a>
          </div>
        );
      })}
    </>
  );
};

export default SocialIcons;
