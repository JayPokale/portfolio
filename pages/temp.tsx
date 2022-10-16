import { NextPage } from "next";
import Temp from "../components/Temp";

const temporary: NextPage = () => {

  return (
    <div className="h-screen flex justify-center items-center">
      <Temp />
    </div>
  );
};

export default temporary;
