import * as React from "react";

function DownArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="26"
      height="35"
      viewBox="0 0 26 35"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="12.5"
        y1="1.5"
        x2="12.5"
        y2="2.5"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="12.5"
        y1="8.5"
        x2="12.5"
        y2="21.5"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="2.11839"
        y1="20.1115"
        x2="12.8217"
        y2="32.0043"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="12.8748"
        y1="32.0871"
        x2="23.5009"
        y2="20.1252"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default DownArrowIcon;
