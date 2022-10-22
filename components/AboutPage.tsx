import type { NextPage } from "next";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect} from "react";

// Create new animation object similar to below object
const mainVarients = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, type: "spring", stiffness: 100 },
  },
};

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
      <div ref={ref}> {/* Wtite content in this div */}

        {/* Example of motion.div (Crete new animations similar to the mainVarients) */}
        <motion.div
          variants={mainVarients}
          animate={animation}
          initial="initial"
        >
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
