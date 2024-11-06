import React from "react";
import HoverCard from "../component/TiltCard";
import Resume from "../component/Resume";

const About = () => {
  return (
    <div className="bg-black h-screen w-screen scroll-py-10">
      <div className="absolute border-2 border-red-300 top-[5%] left-[50%] translate-x-[-50%] space-x-3">
        <label className="text-white text-[32px] font-extrabold">About</label>
        <label className="text-[#a9ffff] text-[32px] font-extrabold">Me</label>
      </div>
      <div className="absolute border-2 border-red-700 top-[15%] ml-[10%] ">
        <div className="border-2 border-red-700   flex flex-col space-x-20 ">
          <HoverCard />
        </div>
        <div className="border-2 border-white  mt-[10px] left-0 text-center">
          <label className="text-white text-[24px] font-bold">
            Web Developer
          </label>
        </div>
        <div className="border-2 border-white  mt-[10px] left-0 ">
          <label className="text-white text-[20px] space-x-4">
            Gmail : bdforwk@gmail.com
          </label>
        </div>
        <div className="border-2 border-white  mt-[10px] left-0 text-center">
          <Resume/>
        </div>
        <div className="border-2 border-white  mt-[10px] left-0 ">
          <label className="text-white text-[20px] "></label>
        </div>
      </div>

      <div className="absolute border-2 border-red-700 top-[15%] ml-[35%] right-[10%] ">
        <div className="border-2 border-white  left-0 ">
          <div className="border-2 border-green-400 text-center">
            <label className="text-white text-[24px] font-bold">
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
