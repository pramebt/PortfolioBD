import React from "react";
import HoverCard from "../component/TiltCard";
import Resume from "../component/Resume";
import DrawOutlineButton from "../component/DrawOutlineButton";

const About = () => {
  return (
    <div className="bg-white h-screen w-screen scroll-py-10">
      <div className="absolute  top-[5%] left-[50%] translate-x-[-50%] space-x-3">
        <label className="text-black text-[32px] font-extrabold">About</label>
        <label className="text-[#a9ffff] text-[32px] font-extrabold">Me</label>
      </div>
      <div className="absolute  top-[15%] ml-[10%] ">
        <div className=" flex flex-col space-x-20 ">
          <HoverCard />
        </div>
        <div className="mt-[10px] left-0 text-center">
          <label className="text-black text-[24px] font-bold">
            Web Developer
          </label>
        </div>
        <div className="mt-[10px] left-0 text-center ">
          <label className="text-black text-[20px] space-x-4">
            Gmail : bdforwk@gmail.com
          </label>
        </div>
        <div className="mt-[10px] left-0 text-center">
          <DrawOutlineButton/>
        </div>
        <div className="mt-[10px] left-0 ">
          <label className="text-black text-[20px] "></label>
        </div>
      </div>

      <div className="absolute  top-[15%] ml-[35%] right-[10%] ">
        <div className="left-0 ">
          <div className="text-center">
            <label className="text-black text-[24px] font-bold">
              I'm a student. Be a person who is ready to work with
              others. Ready to develop yourself to have skills in working and I
              want to enhance skills thought hands-on learning, collaboration
              ondiverse projects, and delivering impactful outcome, all geared
              towards preparing for successful career in the Developer.
            </label>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default About;
