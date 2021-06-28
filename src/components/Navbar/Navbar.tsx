import Link from "next/link";
import React, { useState } from "react";
import { NAV_ITEMS } from "../../data/NavItems";
import CloseIcon from "../../Icons/CloseIcon";
import NavbarIcon from "../../Icons/NavbarIcon";
import Delayed from "../Delayed";
import { useRouter } from "next/router";
import useWindowDimensions from "../../lib/windowDimenstions";
import Footer from "../Footer";
export interface NavbarProps {
  black?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ black }) => {
  const { width, height } = useWindowDimensions();
  const router = useRouter();
  const [showNavbar, setShowNavbar] = useState(false);
  const color = black ? "primary" : "white";

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const isSelected = (path: string) => {
    return router.pathname === path ? `opacity-100` : "";
  };

  return (
    <div className="flex justify-between items-center lg:px-16 px-4 sm:px-4 md:px-8 lg:py-8 py-6 sm:py-6 md:py-8 bg-transparent">
      <Link href="/">
        <a className={`text-${color} text-base`}>Osama</a>
      </Link>
      <div className="flex">
        {showNavbar &&
          (width > 600 ? (
            <Delayed waitBeforeShow={300}>
              <nav>
                <ul className="flex animate-fade">
                  {NAV_ITEMS.map(({ path, title }, itemIdx) => {
                    return (
                      <Link href={path} key={itemIdx}>
                        <a>
                          <li
                            className={`mx-2 text-sm text-${color} opacity-50 hover:opacity-100 duration-300 ${isSelected(
                              path
                            )}`}
                          >
                            {title}
                          </li>
                        </a>
                      </Link>
                    );
                  })}
                </ul>
              </nav>
            </Delayed>
          ) : (
            <div className="fixed w-screen h-screen bg-white opacity-90 z-50 top-0 right-0 animate-fade">
              <button
                aria-label="show navbar list"
                style={{ outline: "none" }}
                className="m-4 mt-5 float-right"
                onClick={handleShowNavbar}
              >
                {!showNavbar && (
                  <NavbarIcon className={`text-black animate-fade`} />
                )}
                {showNavbar && (
                  <CloseIcon className={`text-black animate-fade`} />
                )}
              </button>
              <div className="flex flex-col items-center h-full w-full justify-around">
                <nav>
                  <ul className="flex flex-col animate-fade">
                    {NAV_ITEMS.map(({ path, title }, itemIdx) => {
                      return (
                        <Link href={path} key={itemIdx}>
                          <a>
                            <li
                              className={`text-3xl text-center py-4 text-black opacity-50 hover:opacity-100 duration-300 ${isSelected(
                                path
                              )}`}
                            >
                              {title}
                            </li>
                          </a>
                        </Link>
                      );
                    })}
                  </ul>
                </nav>
                <Footer />
              </div>
            </div>
          ))}
        <button
          aria-label="show navbar list"
          style={{ outline: "none" }}
          className="ml-4"
          onClick={handleShowNavbar}
        >
          {!showNavbar && (
            <NavbarIcon className={`text-${color} animate-fade`} />
          )}
          {showNavbar && <CloseIcon className={`text-${color} animate-fade`} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
