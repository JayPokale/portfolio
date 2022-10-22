import { NextPage } from "next";
import { useEffect, useState } from "react";
const rndInt = (min:number,max:number) => {
  return Math.random() * (max - min + 1) + min
}
const rndTime = () => {
  return Math.random() * (4000) + 2000
}

const temporary: NextPage = () => {
  const [scale, setScale] = useState(1)
  const [rotate, setRotate] = useState(0)
  const scaleFunc = () => {
    setScale(rndInt(1,10))
    setTimeout(() => {
      scaleFunc()
    }, rndTime());
  }
  const rotateFunc = () => {
    setRotate(rndInt(0,360))
    setTimeout(() => {
      rotateFunc()
    }, rndTime());
  }
  useEffect(() => {
    scaleFunc()
    rotateFunc()
  }, [])
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-[8vw] h-[8vw] shadow-2xl transition-all ease-in-out duration-300" style={{backgroundColor:"rgba(127, 127, 127 , 0.05)", transform:`scale(${scale}) rotate(${rotate}deg)`}}></div>
    </div>
  );
};

export default temporary;
