import type { NextPage } from "next";
import { motion } from "framer-motion";
import { Box, Button, useColorMode } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaPinterest,
} from "react-icons/fa";

const navVarients = {
  initial: {
    opacity: 0,
    y: -15,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, type: "spring", stiffness: 100 },
  },
};

const NavTop: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg="rab(256 256 256)"
      backdropFilter="blur(8px)"
      className="max-w-7xl w-full mx-auto select-none"
    >
      <motion.div
        variants={navVarients}
        animate="animate"
        initial="initial"
        className="w-full flex justify-between items-center px-4 sticky"
      >
        <div>
          <ul className="flex gap-4 md:gap-6 opacity-75 text-xl">
            <li className="cursor-pointer">
              <FaFacebookF />
            </li>
            <li className="cursor-pointer">
              <FaInstagram />
            </li>
            <li className="cursor-pointer">
              <FaTwitter />
            </li>
            <li className="cursor-pointer">
              <FaGithub />
            </li>
            <li className="cursor-pointer">
              <FaPinterest />
            </li>
          </ul>
        </div>
        <div>
          <Button onClick={toggleColorMode} zIndex="10">
            {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </div>
      </motion.div>
    </Box>
  );
};

export default NavTop;
