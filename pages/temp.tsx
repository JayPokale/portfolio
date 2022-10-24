import { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import NavBottom from "../components/NavBottom";
import NavTop from "../components/NavTop";
import SkillsTechnical from "../components/SkillsTechnical";
import SkillsProfessional from "../components/SkillsProfessional";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SquareAnimation from "../animations/Square";

const temporary: NextPage = () => {
  const [ref, inView] = useInView();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-full fixed top-0">
        <NavTop />
      </div>
      <div className="w-full fixed bottom-0">
        <NavBottom />
      </div>
      <Box
        fontFamily={"Roboto Mono"}
        className="pb-16 max-w-lg w-[90vw] flex justify-center relative"
      >
        {/* <SkillsTechnical/> */}
        <SkillsProfessional/>
      </Box>
    </div>
  );
};

export default temporary;
