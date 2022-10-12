import { useEffect, useState } from "react";
import "animate.css";

interface TextLoopProps {
  className?: string;
  sentences: string[];
}

export const TextLoop = ({ className, sentences }: TextLoopProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (sentences.length > 1) {
      const setIndexValue = index === sentences.length - 1 ? 0 : index + 1;
      const interval = setInterval(() => {
        setIndex(setIndexValue);
      }, 5000);
      return () => clearInterval(interval);
    }
  });
  return (
    <div>
      <h1 className={"text-lg mt-4 animated-text"}>{sentences[index]}</h1>
    </div>
  );
};
