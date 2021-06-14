import * as React from "react";

export interface ButtonProps {
  handleClick: React.MouseEventHandler;
  children: string;
  light?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, light, handleClick }) => {
  const color = light
    ? "border-white text-white hover:bg-white hover:text-primary"
    : "border-primary text-primary hover:bg-primary hover:text-white";
  return (
    <button
      className={`${color} border-2 bg-transparent px-5 py-2 text-xl ring-transparent m-2 duration-500`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
