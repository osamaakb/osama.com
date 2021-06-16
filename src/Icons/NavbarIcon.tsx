import * as React from "react";

function NavbarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="25"
      height="12"
      viewBox="0 0 25 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line x1="25" y1="0.75" y2="0.75" stroke="currentColor" />
      <line x1="25" y1="11.5" x2="10" y2="11.5" stroke="currentColor" />
    </svg>
  );
}

export default NavbarIcon;
