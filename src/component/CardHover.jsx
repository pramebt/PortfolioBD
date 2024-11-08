import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";
import { IoIosGitNetwork } from "react-icons/io";
import { IoGameControllerOutline } from "react-icons/io5";

const CardHover1 = ({ text, text2, num }) => {
  const [hoverState, setHoverState] = useState(false);
  return (
    <div>
      <div
        className="relative bg-[#E8F1F5] h-[350px] w-[350px] rounded-[28px] overflow-hidden shadow-xl "
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
      >
        <div
          className={`absolute  ${
            hoverState
              ? "bg-[#004A7C] w-[350px] h-[350px] rounded-[28px]"
              : "bg-[#004A7C] w-[100px] h-[100px] mt-10 rounded-[50%]"
          } left-[50%]  transform -translate-x-1/2 transition-all duration-1000`}
        ></div>
        {num == 1 && (
          <IoGameControllerOutline
            color="white"
            size={55}
            className="z-0 absolute left-[50%] top-[62px] transform -translate-x-1/2 "
          />
        
        )}
        {num == 2 && (
          <FaInstagram
            color="white"
            size={55}
            className="z-0 absolute left-[50%] top-[62px] transform -translate-x-1/2 "
          />
        
        )}
        {num == 3 && (
          <IoIosGitNetwork
            color="white"
            size={55}
            className="z-0 absolute left-[50%] top-[62px] transform -translate-x-1/2 "
          />
        
        )}
        <div className="bottom-0 absolute w-full h-1/2">
          <p
            className={`text-center  duration-500 transform transition-all ${
              hoverState ? "text-white scale-110 animate-bounce animat-duration-200 " : "text-black scale-100 text-[32px]"
            }`}
          >
            {hoverState ? text2 : text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardHover1;