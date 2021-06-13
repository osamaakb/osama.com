import * as React from "react";
import { socialIconsData } from "../../data/SocialIconsData";
import Link from "next/link";

export interface SocialIconsProps {}

const SocialIcons: React.FC<SocialIconsProps> = () => {
  return (
    <>
      {socialIconsData.map(({ Icon, path }, iconIdx) => {
        return (
          <div key={iconIdx} className="mx-1">
            <a href={path}>
              <Icon
                className="text-white hover:opacity-50 duration-300"
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
