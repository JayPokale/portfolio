import type { NextPage } from "next";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect} from "react";
import { Box} from "@chakra-ui/react";

const mainVarients = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, type: "spring", stiffness: 100 },
  },
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const AboutPage: NextPage = () => {
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
      <div ref={ref}>
        <motion.div
          variants={mainVarients}
          animate={animation}
          initial="initial"
        >
          <Box
            scrollSnapType="x mandatory"
            className="flex space-x-6 overflow-auto py-10 px-[calc(50%-160px)]"
            css={{
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {arr.map((e) => {
              return (
                <Box
                  key={e}
                  className="h-80 w-80 max-w-full shrink-0 bg-white snap-center"
                  style={{
                    transform: "perspective(500px) rotateY(-30deg)",
                  }}
                ></Box>
              );
            })}
          </Box>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
