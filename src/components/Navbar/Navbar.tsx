import Link from "next/link";
import React, { useState } from "react";
import { NAV_ITEMS } from "../../data/NavItems";
import CloseIcon from "../../Icons/CloseIcon";
import NavbarIcon from "../../Icons/NavbarIcon";
import Delayed from "../Delayed";

export interface NavbarProps {
  black?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ black }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const color = black ? "text-primary" : "text-white";

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="flex justify-between items-center px-16 py-8 bg-transparent">
      <Link href="/">
        <a className={`${color} text-base`}>Osama</a>
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
                        <li className={`mx-2 text-sm ${color}`}>{title}</li>
                      </a>
                    </Link>
                  );
                })}
              </ul>
            </nav>
          </Delayed>
        )}
        <button
          style={{ outline: "none" }}
          className="ml-4"
          onClick={handleShowNavbar}
        >
          {!showNavbar && <NavbarIcon className={`${color} animate-fade`} />}
          {showNavbar && <CloseIcon className={`${color} animate-fade`} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
