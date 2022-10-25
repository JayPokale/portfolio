import type { NextPage } from "next";
import { motion } from "framer-motion";
import { Box, Button, useColorModeValue } from "@chakra-ui/react";

const mainVarientsLeft = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 30 },
  },
};
const mainVarientsRight = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 30 },
  },
};

const HomePage: NextPage = () => {
  const toggleForGray = useColorModeValue("d1d5db", "475569");

  return (
    <div className="max-w-7xl w-full mx-auto select-none">
      <div className="flex md:flex-row flex-col-reverse justify-center items-center gap-4 sm:gap-10 md:gap-18 lg:gap-28">
        {/* Part 1 */}
        <div className="md:w-1/2 flex justify-end">
          <motion.div
            variants={mainVarientsLeft}
            whileInView="animate"
            initial="initial"
          >
            <div className="text-base md:text-lg lg:text-2xl">
              <div className="relative my-4 md:my-6 lg:my-8">
                <input
                  type="text"
                  className="block w-[260px] sm:w-[340px] lg:w-[424px] pt-[10px] pb-[4px] px-4 bg-transparent border-b-2 outline-none focus:outline-transparent peer"
                  placeholder=" "
                />
                <label className="absolute mx-[2px] px-4 duration-300 transform top-3 origin-top-left z-10 text-orange-500 font-bold scale-[60%] -translate-y-4 md:-translate-y-5 lg:-translate-y-6 peer-placeholder-shown:-z-10 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-normal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:z-10 peer-focus:text-orange-500 peer-focus:font-bold peer-focus:scale-[60%] peer-focus:-translate-y-4 peer-focus:md:-translate-y-5 peer-focus:md:lg:-translate-y-6">
                  Name
                </label>
              </div>

              <div className="relative my-4 md:my-6 lg:my-8">
                <input
                  type="text"
                  className="block w-[260px] sm:w-[340px] lg:w-[424px] pt-[10px] pb-[4px] px-4 bg-transparent border-b-2 outline-none focus:outline-transparent peer"
                  placeholder=" "
                />
                <label className="absolute mx-[2px] px-4 duration-300 transform top-3 origin-top-left z-10 text-orange-500 font-bold scale-[60%] -translate-y-4 md:-translate-y-5 lg:-translate-y-6 peer-placeholder-shown:-z-10 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-normal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:z-10 peer-focus:text-orange-500 peer-focus:font-bold peer-focus:scale-[60%] peer-focus:-translate-y-4 peer-focus:md:-translate-y-5 peer-focus:md:lg:-translate-y-6">
                  Email
                </label>
              </div>

              <div className="relative my-4 md:my-6 lg:my-8">
                <input
                  type="text"
                  className="block w-[260px] sm:w-[340px] lg:w-[424px] pt-[10px] pb-[4px] px-4 bg-transparent border-b-2 outline-none focus:outline-transparent peer"
                  placeholder=" "
                />
                <label className="absolute mx-[2px] px-4 duration-300 transform top-3 origin-top-left z-10 text-orange-500 font-bold scale-[60%] -translate-y-4 md:-translate-y-5 lg:-translate-y-6 peer-placeholder-shown:-z-10 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-normal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:z-10 peer-focus:text-orange-500 peer-focus:font-bold peer-focus:scale-[60%] peer-focus:-translate-y-4 peer-focus:md:-translate-y-5 peer-focus:md:lg:-translate-y-6">
                  Subject
                </label>
              </div>

              <div className="relative my-4 md:my-6 lg:my-8">
                <input
                  type="text"
                  className="block w-[260px] sm:w-[340px] lg:w-[424px] pt-[10px] pb-[4px] px-4 bg-transparent border-b-2 outline-none focus:outline-transparent peer"
                  placeholder=" "
                />
                <label className="absolute mx-[2px] px-4 duration-300 transform top-3 origin-top-left z-10 text-orange-500 font-bold scale-[60%] -translate-y-4 md:-translate-y-5 lg:-translate-y-6 peer-placeholder-shown:-z-10 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-normal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:z-10 peer-focus:text-orange-500 peer-focus:font-bold peer-focus:scale-[60%] peer-focus:-translate-y-4 peer-focus:md:-translate-y-5 peer-focus:md:lg:-translate-y-6">
                  Content
                </label>
              </div>

              <Button
                as={"div"}
                size={["sm", "md", "lg"]}
                className={`relative my-2 md:my-3 lg:my-4 after:w-0 overflow-hidden after:h-full after:absolute after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}
                _hover={{ bg: "" }}
                css={{
                  "&::after": { backgroundColor: `#${toggleForGray}` },
                }}
              >
                <span className="z-10">Submit</span>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Part 2 */}
        <div className="md:w-1/2">
          <motion.div
            variants={mainVarientsRight}
            whileInView="animate"
            initial="initial"
            className="h-48 sm:h-[280px] md:h-[360px] lg:h-[400px] w-44 sm:w-[264px] md:w-80 lg:w-[360px] flex overflow-hidden relative"
          >
            <div
              className="w-full h-full absolute -z-10 bg-gray-500 opacity-10"
              style={{ borderRadius: "30% 70% 30% 70% / 25% 40% 60% 75%" }}
            ></div>
            <div
              className="flex flex-col justify-between items-center w-full h-full"
              style={{ textShadow: "0 0 1px" }}
            >
              <Box
                textColor={"orange.400"}
                className="text-xl sm:text-3xl md:text-5xl font-semibold"
              >
                CONTACT
                <div className="flex items-center">
                  <Box
                    bg={"orange.400"}
                    className="h-1 w-14 sm:w-24 md:w-40 mx-1.5 lg:mx-2"
                  ></Box>
                  <div>US</div>
                </div>
              </Box>
              <div className="w-full px-2 text-justify opacity-80 text-xs sm:text-base md:text-xl lg:text-2xl pb-2 md:pb-4 lg:pb-6">
                It is very important for us to get connected with you. So we are
                always ready to give answers to any of your questions.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
