import type { NextPage } from "next";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import SkillsProfessional from "./SkillsProfessional";
import SkillsTechnical from "./SkillsTechnical";

const mainVarients = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { type: "spring", stiffness: 25 },
  },
};

const SkillsPage: NextPage = () => {
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

  const [state, setState] = useState(false);

  return (
    <div className="max-w-7xl w-full mx-auto select-none">
      <div ref={ref}>
        <motion.div
          variants={mainVarients}
          animate={animation}
          initial="initial"
          className="h-4 sm:h-16 flex justify-center gap-8 sm:gap-16 lg:gap-24 mt-16 sm:mt-0 text-lg sm:text-xl lg:text-2xl"
        >
          <motion.div
            className="cursor-pointer"
            animate={{
              opacity: state ? 0.5 : 0.9,
              scale: state ? 0.9 : 1.1,
              transition: {
                type: "linear",
                duration: 0.5,
              },
            }}
            onClick={() => {
              setState(false);
            }}
          >
            Technical
          </motion.div>
          <motion.div
            className="cursor-pointer"
            animate={{
              opacity: state ? 0.9 : 0.5,
              scale: state ? 1.1 : 0.9,
              transition: {
                type: "linear",
                duration: 0.5,
              },
            }}
            onClick={() => {
              setState(true);
            }}
          >
            Professional
          </motion.div>
        </motion.div>
        <Box
          fontFamily={"Roboto Mono"}
          className="pb-16 h-[512px] max-w-lg w-[90vw] flex justify-center items-start lg:items-center relative mx-auto"
        >
          {state ? <SkillsProfessional /> : <SkillsTechnical />}
        </Box>
      </div>
    </div>
  );
};

export default SkillsPage;
