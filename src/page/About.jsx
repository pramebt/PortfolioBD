import React from "react";
import HoverCard from "../component/TiltCard";
import Button from "../component/Button";
import CardHover from "../component/CardHover";
import CardHover1 from "../component/CardHover";
import Skills from "../component/Skills";
import { Hovericon } from "../component/Hovericon";

const About = () => {
  return (
    <div className="bg-[#FAFAFA] h-screen w-screen scroll-py-10">
      <div className="absolute  top-[5%] left-[50%] translate-x-[-50%] space-x-3 text-[48px]">
        <label className="text-[#000000] font-extrabold">About</label>
        <label className="text-[#005691]  font-extrabold">Me</label>
      </div>
      <div className="absolute  top-[15%] left-[50%] translate-x-[-50%] ">
        <div className=" flex flex-col space-x-20 ">
          <HoverCard />
        </div>
        <div className="mt-[10px] left-0 text-center">
          <label className="text-black text-[24px] font-bold">
            Web Developer
          </label>
        </div>
        <div className="mt-[10px] left-0 text-center ">
          <label className="text-black text-[20px] space-x-4 font-light">
            Gmail : bdforwk@gmail.com
          </label>
        </div>
        <div className="mt-[10px] left-0 text-center ">
          <Button />
        </div>
        <div className="mt-[10px] left-0 ">
          <label className="text-black text-[20px] "></label>
        </div>
      </div>

      <div className="absolute  top-[110%] left-[50%] translate-x-[-50%] ">
        <div className="left-0 ">
          <div className="text-center w-[1000px]">
            <label className="text-black text-[32px] font-light italic">
              I'm a student. Be a person who is ready to work with others. Ready
              to develop yourself to have skills in working and I want to
              enhance skills thought hands-on learning, collaboration ondiverse
              projects, and delivering impactful outcome, all geared towards
              preparing for successful career in the Developer.
            </label>
          </div>
          <div className="bg-cyan-800 h-[5px] mt-[10px] rounded-md"></div>
        </div>
        <div className="relative justify-center mt-[48px] space-x-[64px] flex">
          <CardHover1
            num={1}
            text={"play together"}
            text2={"play together with my friends"}
          />
          <CardHover1
            num={2}
            text={"play together"}
            text2={"play together with my friends"}
          />
        </div>
        <div className="relative justify-center mt-[48px] space-x-[64px] flex">
          <CardHover1
            num={3}
            text={"play together"}
            text2={"play together with my friends"}
          />
        </div>
        <div className="relative border-2 border-red-400 mt-[5%] left-[50%] translate-x-[-50%]">
          <div className="relative text-center space-x-3 text-[48px] ">
            <label className="text-[#000000] font-extrabold">My</label>
            <label className="text-[#005691] font-extrabold">Skills</label>
          </div>
          <div className=" h-screen ">
            <div className="justify-items-center grid grid-rows-3 grid-cols-3 h-full w-full border-2 border-green-800">
              <Hovericon Icon="React" text={"React"} />
              <Hovericon Icon="Html" text={"Html"} />
              <Hovericon Icon="Html" text={""} />

              <Hovericon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
