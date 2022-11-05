import type { NextPage } from "next";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

const navVarients = {
  initial: {
    opacity: 0,
    y: 15,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50 },
  },
};

const NavBottom: NextPage = () => {
  return (
    <Box
      className="max-w-7xl w-full mx-auto select-none mb-3"
    >
      <motion.div
        variants={navVarients}
        animate="animate"
        initial="initial"
        className="flex justify-center items-center text-xs xs:text-base"
      >
        <ul className="flex gap-4 md:gap-6 py-2">
          <a href="#home" className="cursor-pointer">Home</a>
          <a href="#skill" className="cursor-pointer">Skills</a>
          <a href="#contact" className="cursor-pointer">Contact</a>
        </ul>
      </motion.div>
    </Box>
  );
};

export default NavBottom;
