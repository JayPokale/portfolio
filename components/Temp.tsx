import { Box } from "@chakra-ui/react";
import { useScroll } from "react-use-gesture";
import { animated, useSpring } from "react-spring";

const movies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Scroll = () => {
  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)",
  }));

  const clamp = (value: number, clampAt: number = 20) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  };

  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) * 3 : 0
      }deg)`,
    });
  });

  return (
    <>
      <Box
        className="flex overflow-x-scroll w-full py-8"
        {...bind()}
        css={{
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {movies.map((src) => (
          <animated.div
            key={src}
            className="w-80 h-80 bg-white shrink-0 mx-4"
            style={{ ...style }}
          />
        ))}
      </Box>
    </>
  );
};

export default Scroll;
