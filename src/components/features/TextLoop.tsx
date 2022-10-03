import { useEffect, useState } from "react";
import "animate.css";

interface TextLoopProps {
  className?: string;
  time: number;
  sentences: string[];
}

export const TextLoop = ({ className, time, sentences }: TextLoopProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (sentences.length > 1) {
      const setIndexValue = index === sentences.length - 1 ? 0 : index + 1;
      const interval = setInterval(() => {
        setIndex(setIndexValue);
      }, time);
      return () => clearInterval(interval);
    }
  });
  return (
    <div>
      <h1
        className={`${className} animate__animated animate__animate__fadeInUp text-lg mt-4`}
      >
        {sentences[index]}
      </h1>
      <h1 className="animate__animated animate__bounce">Helloo</h1>
    </div>
  );
};
