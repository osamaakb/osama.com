import Link from "next/link";
import React, { useState } from "react";
import { NAV_ITEMS } from "../../data/NavItems";
import CloseIcon from "../../Icons/CloseIcon";
import NavbarIcon from "../../Icons/NavbarIcon";
import Delayed from "../Delayed";
import { useRouter } from "next/router";

export interface NavbarProps {
  black?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ black }) => {
  const router = useRouter();
  const [showNavbar, setShowNavbar] = useState(false);
  const color = black ? "primary" : "white";

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const isSelected = (path: string) => {
    return router.pathname === path
      ? `border-b-2 opacity-100 pb-1 border-${color}`
      : "";
  };

  return (
    <div className="flex justify-between items-center px-16 py-8 bg-transparent">
      <Link href="/">
        <a className={`text-${color} text-base`}>Osama</a>
      </Link>
      <div className="flex">
        {showNavbar && (
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
        )}
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
