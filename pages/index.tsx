import type { NextPage } from "next";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import NavTop from "../components/NavTop";
import NavBottom from "../components/NavBottom";

const Home: NextPage = () => {
  return (
    <>
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
        <div className="fixed top-0 w-full z-10">
          <NavTop />
        </div>
        <div className="fixed bottom-0 w-full z-10">
          <NavBottom />
        </div>
        <div className="h-screen snap-center flex items-center">
          <HomePage />
        </div>
        <div className="h-screen snap-center flex items-center">
          <AboutPage />
        </div>
        <div className="h-screen snap-center"></div>
      </div>
    </>
  );
};

export default Home;
