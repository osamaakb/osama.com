import React, { useState } from "react";

export interface NewsLetterProps {}

const NewsLetter: React.FC<NewsLetterProps> = () => {
  const [emailInputValue, setEmailInputValue] = useState("");
  return (
    <div className="bg-gray-200 flex flex-col items-center">
      <div className="flex justify-center items-center">
        <h1 className="text-5xl pt-12">Susbscribe to my newsletter</h1>
      </div>
      <div className="pt-10 pb-14 flex justify-center">
        <input
          className="border-primary border h-12 w-80 outline-none p-3"
          height={200}
          placeholder="Enter Address"
          value={emailInputValue}
          onChange={(e) => setEmailInputValue(e.target.value)}
        />
        <button
          className="bg-primary text-white mx-2 h-12 px-4 hover:bg-white hover:text-primary 
          border border-primary  duration-500"
        >
          Subscribe
        </button>
      </div>
      <span className="pb-5 text-gray-500 text-sm">
        You will not receive any spam from me.
      </span>
    </div>
  );
};

export default NewsLetter;
