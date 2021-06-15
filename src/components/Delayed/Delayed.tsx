import React, { useEffect, useState } from "react";

interface DelayedProps {
  waitBeforeShow?: number;
  children: JSX.Element;
}

const Delayed: React.FC<DelayedProps> = ({
  children,
  waitBeforeShow = 500,
}) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
  }, [waitBeforeShow]);

  return isShown ? children : null;
};

export default Delayed;
