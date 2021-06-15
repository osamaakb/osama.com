import Image from "next/image";
import React from "react";
import { NAV_ITEMS } from "../../data/NavItems";
import DownArrowIcon from "../../Icons/DownArrow";
import Button from "../Button/Button";
import SocialIcons from "../SocialIcons";
import { useRouter } from "next/router";
import { route } from "next/dist/next-server/server/router";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const router = useRouter();

  return (
    <div className="h-screen">
      <div className="relative h-screen">
        <Image
          alt="photo of osama"
          layout="fill"
          src="/landingpage.jpg"
          objectFit="cover"
        />
        <div className="h-screen w-screen absolute bg-primary opacity-40"></div>
        <div className="text-white h-screen w-2/4 flex justify-center items-start flex-col z-10 absolute right-0">
          <div>
            <h1 className="text-left ml-2 text-4xl mb-4 leading-snug">
              <b>Every coder has their journey.</b> <br />
              <span className="text-3xl">This is mine.</span>
            </h1>
            <div className="flex">
              {NAV_ITEMS.map(({ title, path }, itemIdx) => {
                return (
                  <Button
                    key={itemIdx}
                    handleClick={() => router.push(path)}
                    light
                  >
                    {title}
                  </Button>
                );
              })}
            </div>
            <div className="ml-1 flex mt-4">
              <SocialIcons />
            </div>
          </div>
        </div>
        <DownArrowIcon className="text-white absolute my-3 bottom-0 right-1/2 animate-bounce" />
      </div>
    </div>
  );
};

export default Header;
