import Link from "next/link";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      <p>oops, looks like you entered a wrong URL</p>
      <p>
        Maybe visit this{" "}
        <Link href="/">
          <a className="underline">Link</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
