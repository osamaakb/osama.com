import * as React from "react";

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="18.6526"
        y1="0.345833"
        x2="1.36095"
        y2="18.4013"
        stroke="currentColor"
      />
      <line
        x1="18.7102"
        y1="17.5799"
        x2="0.543833"
        y2="0.404818"
        stroke="currentColor"
      />
    </svg>
  );
}

export default CloseIcon;
