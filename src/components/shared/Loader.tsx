import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/assets/icons/Animation_2.json";

const Loader = () => {
  const [loadingText, setLoadingText] = useState("Loading");

  const options = {
    animationData: animationData,
    loop: true,
    autoplay: true,
    speed: 4,
  };
  useEffect(() => {
    
    const interval = setInterval(() => {
      setLoadingText((prevText) => {
        switch (prevText) {
          case "Loading":
            return "Loading.";
          case "Loading.":
            return "Loading..";
          case "Loading..":
            return "Loading...";
          default:
            return "Loading"; 
        }
      });
    }, 333);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="w-full flex items-center justify-center h-[80vh]">
      <div className="h-[300px] w-[300px]">
        <Lottie {...options} />
        <h4 className="h3-bold  text-center">{loadingText}</h4>
      </div>
    </div>
  );
};

export default Loader;
