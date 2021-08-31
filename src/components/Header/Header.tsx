import React from "react";
import { NAV_ITEMS } from "../../data/NavItems";
import DownArrowIcon from "../../Icons/DownArrow";
import Button from "../Button/Button";
import SocialIcons from "../SocialIcons";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <div className="h-screen">
      <div
        className="relative h-screen"
        style={{
          backgroundImage: `url("/landingpage.jpg")`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div className="h-screen w-screen absolute bg-primary opacity-40"></div>
        <div className="text-white h-screen lg:w-2/4 md:w-2/4 sm:w-full w-full z-10 absolute right-0 p-4 lg:p-0 md:p-0 sm:p-4">
          <div className="flex flex-col h-full justify-center px-2">
            <h1 className="lg:text-left md:text-left sm:text-center text-center lg:ml-2 md:ml-2 sm:ml-0 ml-0 text-3xl lg:mb-4 md:mb-4 sm:mb-4 mb-4 leading-snug lg:mr-28 md:mr-20 sm:mr-0 mr-0">
              <b>
                I teach code and make programs that aim to make people’s life
                better.
              </b>
            </h1>
            <div className="flex flex-row lg:justify-start md:justify-start sm:justify-center justify-center">
              {NAV_ITEMS.slice(1).map(({ title, path }, itemIdx) => {
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
            <div className="lg:ml-1 md:ml-1 sm:ml-0 ml-0 mt-4 flex sm:justify-center justify-center lg:justify-start md:justify-start">
              <SocialIcons />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <DownArrowIcon className="text-white absolute my-3 bottom-0 animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Header;
