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
    transition: { duration: 0.3, type: "spring", stiffness: 100 },
  },
};

const NavBottom: NextPage = () => {
  return (
    <Box
      bg="rab(256 256 256)"
      backdropFilter='blur(8px)'
      className="max-w-7xl w-full mx-auto select-none"
    >
      <motion.div
        variants={navVarients}
        animate="animate"
        initial="initial"
        className="flex justify-center items-center"
      >
        <ul className="flex gap-4 md:gap-6 py-2">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Skills</li>
          <li className="cursor-pointer">Work</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </motion.div>
    </Box>
  );
};

export default NavBottom;
