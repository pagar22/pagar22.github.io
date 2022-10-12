import { useEffect, useState } from "react";
import "animate.css";

interface TextLoopProps {
  className?: string;
  sentences: string[];
}

export const TextLoop = ({ className, sentences }: TextLoopProps) => {
  const [index, setIndex] = useState(0);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (sentences.length > 1) {
      const setIndexValue = index === sentences.length - 1 ? 0 : index + 1;
      const interval = setInterval(() => {
        setIndex(setIndexValue);
      }, 5000);
      return () => clearInterval(interval);
    }
  });

  useEffect(() => {
    setAnimated(!animated);
    console.log(animated);
  }, [index]);

  return (
    <div>
      <h1
        className={`text-lg mt-4 opacity-0 ${
          animated ? `animated-text` : `animated-text2`
        }`}
      >
        {sentences[index]}
      </h1>
    </div>
  );
};
