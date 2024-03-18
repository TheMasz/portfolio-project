import { useState, useEffect } from "react";
import ReactHtmlParser from "html-react-parser";

const Typed = ({ text, speed }: { text: string; speed: number }) => {
  const [newStr, setStr] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setStr((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setStr("");
        setCurrentIndex(0);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <div className="typed">
      {ReactHtmlParser(newStr)}
      <span className="sympol">I</span>
    </div>
  );
};

export default Typed;
