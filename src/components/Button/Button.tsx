import * as React from "react";

export interface ButtonProps {
  handleClick: React.MouseEventHandler;
  children: string;
  light?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, light, handleClick }) => {
  const color = light
    ? "border-white text-white"
    : "border-primary text-primary";
  return (
    <button
      className={`${color} border-2 bg-transparent px-5 py-2 text-xl ring-transparent m-2 hover:bg-white hover:text-primary duration-500`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
