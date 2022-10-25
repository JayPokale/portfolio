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
        <div className="h-screen flex items-center py-24">
          <HomePage />
        </div>
        <div className="h-screen flex items-center py-24">
          <SkillsPage/>
        </div>
        <div className="h-screen flex items-center py-24">
          <ContactPage />
        </div>
      </div>
    </>
  );
};

export default Home;
