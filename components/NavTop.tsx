import type { NextPage } from "next";
import { motion } from "framer-motion";
import { Box, Button, useColorMode } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const navVarients = {
  initial: {
    opacity: 0,
    y: -15,
  },
  animate: {
    opacity: 1,
    y: 5,
    transition: { type: "spring", stiffness: 50 },
  },
};

const NavTop: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      className="max-w-7xl w-full mx-auto select-none"
    >
      <motion.div
        variants={navVarients}
        animate="animate"
        initial="initial"
        className="w-full flex justify-between items-center px-4 sticky"
      >
        <div>
          <nav className="flex gap-4 md:gap-6 opacity-75 text-xl">
            <a href="https://www.facebook.com/dare2solve" className="cursor-pointer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/dare2solve/" className="cursor-pointer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/dare2solve" className="cursor-pointer">
              <FaTwitter />
            </a>
            <a href="https://github.com/JayPokale" className="cursor-pointer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/jay-pokale-809942143/" className="cursor-pointer">
              <FaLinkedinIn />
            </a>
          </nav>
        </div>
        <div>
          <div onClick={toggleColorMode} className="text-xl cursor-pointer">
          {colorMode === "light" ? <SunIcon/> : <MoonIcon/>}
          </div>
        </div>
      </motion.div>
    </Box>
  );
};

export default NavTop;
