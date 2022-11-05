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
        <div className="fixed w-full z-10 top-0">
          <NavTop />
        </div>
        <div className="fixed w-full z-10 bottom-0">
          <NavBottom />
        </div>
        <div id="home" className="min-h-screen flex items-center">
          <HomePage />
        </div>
        <div id="skill" className="min-h-screen flex items-center">
          <SkillsPage/>
        </div>
        <div id="contact" className="min-h-screen flex items-center">
          <ContactPage />
        </div>
      </div>
    </>
  );
};

export default Home;
