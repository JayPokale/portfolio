import { NextPage } from "next";
import { useEffect, useState } from "react";
const rndInt = (min: number, max: number) => {
  return Math.random() * (max - min + 1) + min;
};

const SquareAnimation: NextPage = () => {
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const animation = () => {
    setScale(rndInt(1, 10));
    setRotate(rndInt(-180, 180));
    setTimeout(() => {
      animation();
    }, 3000);
  };
  useEffect(() => {
    animation();
  }, []);
  return (
    <div
      style={{
        height:"8vw",
        width:"8vw",
        backgroundColor: "rgba(127, 127, 127 , 0.1)",
        transform: `scale(${scale}) rotate(${rotate}deg)`, transitionDuration:"1000ms", transitionTimingFunction:"ease-in-out",
      }}
    ></div>
  );
};

export default SquareAnimation;
