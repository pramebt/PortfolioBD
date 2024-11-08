import React from "react";

const Skills = ({ percent }) => {
  return (
    <div className="bg-[#004A7C] h-[42px] w-[400px] rounded-[50px] overflow-hidden p-[4px] mb-[10px]">
      <div
        className="relative bg-[#E8F1F5] h-full rounded-[50px] overflow-hidden text-center " style={{ width: `${percent}%` }}
      >
        <p className="absolute border-2 border-red-300 h-full w-full text-[18px] font-bold " >{percent}%</p>
      </div>
    </div>
  );
};

export default Skills;
