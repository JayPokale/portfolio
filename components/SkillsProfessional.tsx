import { NextPage } from "next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  new Skill("Communication", 90),
  new Skill("Team Work", 65),
  new Skill("Project Management", 75),
  new Skill("Creativity", 85),
];

const SkillsProfessional: NextPage = () => {
  const [ref, inView] = useInView();
  let i = 0;

  return (
    <>
      <div
        ref={ref}
        className="w-2/3 h-5/6 absolute -z-10 bg-gray-500 opacity-5"
        style={{ borderRadius: "30% 70% 30% 70% / 25% 40% 60% 75%" }}
      ></div>
      <div
        className="w-96 flex flex-wrap justify-evenly items-center scale-75 sm:scale-100 lg:scale-125 absolute lg:mt-4"
      >
        {allSkills.map((skill) => eachSkill(skill, inView, i++))}
      </div>
    </>
  );
};

export default SkillsProfessional;

const eachSkill = (skill: Skill, inView: boolean, i: number) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 20, delay: i / 8 + 0.5 }}
      key={skill.skill}
      className="w-44 h-36 relative my-6"
    >
      <div>
        <div className="absolute top-[44px] left-[72px] opacity-90 tracking-wider">
          {skill.progress}
          <span className="text-xs opacity-50">%</span>
        </div>
        <svg viewBox="-2 -2 64 64" className="transform -rotate-90 px-8">
          <motion.circle
            animate={{
              strokeDashoffset: inView
                ? ((100 - skill.progress) / 100) * 2 * Math.PI * 30
                : 2 * Math.PI * 30,
              transition: {
                type: "spring",
                stiffness: 20,
                delay: i / 8,
              },
            }}
            fill="none"
            stroke="#f97316"
            stroke-width="4"
            stroke-linecap="round"
            stroke-dasharray={`${2 * Math.PI * 30}`}
            cx="30"
            cy="30"
            r="30"
          />
          <circle
            className="absolute opacity-5"
            fill="none"
            stroke="#000"
            stroke-width="4"
            stroke-dasharray={`${2 * Math.PI * 30}`}
            cx="30"
            cy="30"
            r="30"
          />
        </svg>
      </div>
      <div className="flex text-sm justify-center opacity-80 py-2">{skill.skill}</div>
    </motion.div>
  );
};
