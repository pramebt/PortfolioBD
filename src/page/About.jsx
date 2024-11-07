import React from "react";
import HoverCard from "../component/TiltCard";
import Button from "../component/Button";


const About = () => {
  return (
    <div className="bg-[#FAFAFA] h-screen w-screen scroll-py-10">
      <div className="absolute  top-[5%] left-[50%] translate-x-[-50%] space-x-3">
        <label className="text-[#000000] text-[32px] font-extrabold">About</label>
        <label className="text-[#005691] text-[32px] font-extrabold">Me</label>
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
          <Button/>
        </div>
        <div className="mt-[10px] left-0 ">
          <label className="text-black text-[20px] "></label>
        </div>
      </div>

      <div className="absolute  top-[110%] left-[50%] translate-x-[-50%] ">
        <div className="left-0 ">
          <div className="text-center w-[1000px]">
            <label className="text-black text-[32px] font-light italic">
              I'm a student. Be a person who is ready to work with
              others. Ready to develop yourself to have skills in working and I
              want to enhance skills thought hands-on learning, collaboration
              ondiverse projects, and delivering impactful outcome, all geared
              towards preparing for successful career in the Developer.
            </label>
          </div>
          <div className="bg-cyan-800 h-[5px] mt-[10px] rounded-md">
          </div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, nihil!
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
