import { NextPage } from "next";

class Skill {
  skill: string;
  progress: number;

  constructor(skill: string, progress: number) {
    this.skill = skill;
    this.progress = progress;
  }
}
type mySkill = Array<Skill>;

const allSkills: mySkill = [
  new Skill("Web Development", 70),
  new Skill("Competitive Programming", 85),
  new Skill("Mathematics", 85),
  new Skill("Logic Building", 75),
  new Skill("Apptitude", 65),
  new Skill("Frontend", 85),
  new Skill("Backend", 60),
];

const temporary: NextPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div
        className="h-96 w-96 rounded-2xl shadow-2xl"
      ></div>
    </div>
  );
};

export default temporary;
