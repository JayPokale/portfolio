import type { NextPage } from "next";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import ContactPage from "../components/ContactPage";
import NavTop from "../components/NavTop";
import NavBottom from "../components/NavBottom";
import SkillsPage from "../components/Skills";

const Home: NextPage = () => {
  return (
    <>
      <div className="h-screen">
        <div className="fixed top-0 w-full z-10">
          <NavTop />
        </div>
        <div className="fixed bottom-0 w-full z-10">
          <NavBottom />
        </div>
        <div className="h-screen flex items-center">
          <HomePage />
        </div>
        <div className="h-screen flex items-center">
          <SkillsPage/>
        </div>
        <div className="h-screen flex items-center">
          <ContactPage />
        </div>
      </div>
    </>
  );
};

export default Home;
