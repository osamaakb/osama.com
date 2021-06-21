import * as React from "react";

function PrevArrowIcon(props: React.SVGProps<SVGSVGElement>) {
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
        x1="32.7047"
        y1="12.5"
        x2="31.7047"
        y2="12.5"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="25.7047"
        y1="12.5"
        x2="12.7047"
        y2="12.5"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="14.0932"
        y1="2.11839"
        x2="2.20041"
        y2="12.8217"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="2.11762"
        y1="12.8748"
        x2="14.0795"
        y2="23.5009"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default PrevArrowIcon;
