import { useEffect, useState } from "react";

interface TextLoopProps {
  sentences: string[];
  duration?: number;
}

export const TextLoop = ({ sentences, duration = 5 }: TextLoopProps) => {
  const [index, setIndex] = useState(0);
  const animateClass = `text-lg mt-4 animate-[animated-fly-loop_5s_infinite]`;
  useEffect(() => {
    if (sentences.length > 1) {
      const setIndexValue = index === sentences.length - 1 ? 0 : index + 1;
      const interval = setInterval(() => {
        setIndex(setIndexValue);
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [index]);

  return (
    <div>
      <h1 className={`${animateClass}`}>{sentences[index]}</h1>
    </div>
  );
};
