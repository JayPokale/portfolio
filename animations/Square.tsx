import { NextPage } from "next";
import { useEffect, useState } from "react";
const rndInt = (min: number, max: number) => {
  return Math.random() * (max - min + 1) + min;
};
const rndTime = () => {
  return Math.random() * 2000 + 2000;
};

const SquareAnimation: NextPage = () => {
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const scaleFunc = () => {
    setScale(rndInt(1, 10));
    setTimeout(() => {
      rotateFunc();
    }, rndTime());
  };
  const rotateFunc = () => {
    setRotate(rndInt(0, 360));
    setTimeout(() => {
      scaleFunc();
    }, rndTime());
  };
  useEffect(() => {
    scaleFunc();
  }, []);
  return (
    <div
      className="w-[8vw] h-[8vw] shadow-2xl"
      style={{
        backgroundColor: "rgba(127, 127, 127 , 0.05)",
        transform: `scale(${scale}) rotate(${rotate}deg)`, transitionDuration:"1000ms", transitionTimingFunction:"ease-in-out",
      }}
    ></div>
  );
};

export default SquareAnimation;
