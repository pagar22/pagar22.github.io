import { useState } from "react";

interface FlipCardProps {
  className?: string;
  childrenFront: JSX.Element;
  childrenBack: JSX.Element;
}

export const FlipCard = ({
  className,
  childrenFront,
  childrenBack,
}: FlipCardProps) => {
  const [flipped, setFlipped] = useState(true);
  const toggleFlipped = () => setFlipped(!flipped);
  return (
    <div
      className={`${className} flip-conatiner ${flipped ? `` : `isFlipped`}`}
    >
      <div className={`front`} onClick={toggleFlipped}>
        {childrenFront}
      </div>
      <div className={"back"} onClick={toggleFlipped}>
        {childrenBack}
      </div>
    </div>
  );
};
