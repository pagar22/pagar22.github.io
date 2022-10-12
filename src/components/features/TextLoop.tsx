import { useEffect, useState } from "react";

interface TextLoopProps {
  className?: string;
  sentences: string[];
}

export const TextLoop = ({ className, sentences }: TextLoopProps) => {
  const [index, setIndex] = useState(0);
  const [animated, setAnimated] = useState(false);
  const seconds = 5000;
  const animatedClassName1 = `animate-[animated-fly-loop-1_${
    seconds / 1000
  }s_infinite]`;
  const animatedClassName2 = `animate-[animated-fly-loop-2_${
    seconds / 1000
  }s_infinite]`;

  const getClassBySeconds = (time: number, loop: boolean) => {
    return `animate-[animated-fly-loop-${loop ? `1` : `2`}_${time}s]`;
  };
  console.log(getClassBySeconds(5, true));

  useEffect(() => {
    if (sentences.length > 1) {
      const setIndexValue = index === sentences.length - 1 ? 0 : index + 1;
      const interval = setInterval(() => {
        setIndex(setIndexValue);
        setAnimated(!animated);
      }, seconds);
      return () => clearInterval(interval);
    }
  }, [index]);

  return (
    <div>
      <h1
        className={`text-lg mt-4 ${
          animated
            ? `animate-[animated-fly-loop-1_5s_infinite]`
            : `animate-[animated-fly-loop-2_5s_infinite]`
        }`}
      >
        {sentences[index]}
      </h1>
      {/* <h1
        className={`text-lg mt-4 ${
          animated
            ? `animate-[animated-fly-loop-1_5s_infinite]`
            : `animate-[animated-fly-loop-2_5s_infinite]`
        }`}
      >
        Helloo
      </h1> */}
    </div>
  );
};
