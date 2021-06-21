import * as React from "react";

function NextArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="35"
      height="26"
      viewBox="0 0 35 26"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="1.5"
        y1="13.1185"
        x2="2.5"
        y2="13.1185"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="8.5"
        y1="13.1185"
        x2="21.5"
        y2="13.1185"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="20.1115"
        y1="23.5001"
        x2="32.0043"
        y2="12.7968"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="32.0871"
        y1="12.7438"
        x2="20.1252"
        y2="2.11767"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default NextArrowIcon;
