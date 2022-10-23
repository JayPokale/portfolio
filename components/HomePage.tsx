import type { NextPage } from "next";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import SquareAnimation from "../animations/Square";

const mainVarientsSquares = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, type: "spring", stiffness: 100 },
  },
};
const mainVarientsLeft = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, type: "spring", stiffness: 100 },
  },
};
const mainVarientsRight = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, type: "spring", stiffness: 100 },
  },
};
const mainVarientsBottom = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

const HomePage: NextPage = () => {
  const toggleOrange = useColorModeValue("orange.400", "orange.300");

  const [ref, inView] = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        animation.start("animate");
      }, 500);
    }
    if (!inView) {
      animation.start("initial");
    }
  }, [inView]);

  return (
    <div className="max-w-7xl w-full mx-auto select-none">
      {inView && (
        <motion.div
          variants={mainVarientsSquares}
          animate={animation}
          initial="initial"
          className="fixed max-w-7xl w-full h-[400px] flex flex-col lg:flex-row justify-between lg:justify-evenly -z-10"
        >
          <div className="mx-auto">
            <SquareAnimation />
          </div>{" "}
          <div className="mx-auto">
            <SquareAnimation />
          </div>
        </motion.div>
      )}
      <div ref={ref}>
        <div className="flex lg:flex-row flex-col-reverse justify-center items-center">
          <div className="lg:w-1/2 flex justify-end lg:pr-10">
            <motion.div
              variants={mainVarientsLeft}
              animate={animation}
              initial="initial"
              className="text-2xl md:text-4xl"
            >
              <div className="text-gray-500">
                Hello,
                <br /> I am{" "}
                <Text
                  as={"span"}
                  fontWeight="semibold"
                  color={toggleOrange}
                  opacity={0.9}
                >
                  Jay Pokale
                </Text>{" "}
                <br /> AKA{" "}
                <Text
                  as={"span"}
                  fontWeight="semibold"
                  color={toggleOrange}
                  opacity={0.9}
                >
                  Dare2Solve
                </Text>
              </div>
            </motion.div>
          </div>
          <div className="lg:w-1/2 lg:pl-10">
            <motion.div
              variants={mainVarientsRight}
              animate={animation}
              initial="initial"
              exit="initial"
              className="h-48 md:h-72 w-48 md:w-72 flex overflow-hidden"
              style={{ borderRadius: "50% 50% 50% 50% / 30% 30% 70% 70% " }}
            >
              <Image src={"/jay.png"} width={288} height={288}></Image>
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={mainVarientsBottom}
          animate={animation}
          initial="initial"
          className="flex justify-center my-4 text-lg md:text-2xl lg:text-6xl"
        >
          <div>I am a &#160;</div>
          <Box fontWeight="semibold" color={toggleOrange}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Web Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(100)
                  .typeString("Mathematician")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
              options={{
                loop: true,
                delay: 50,
              }}
            />
          </Box>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
