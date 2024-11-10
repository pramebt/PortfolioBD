import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
export const Hovericon = ({Icon,text}) => {
  const [hoverState, setHoverState] = useState(false);
  return (
    <div>
      <div className=" w-[200px] h-[200px] mt-10 rounded-[50%]">
        <div
          className={`relative ${
            hoverState
              ? "bg-white w-0 h-0 rounded-[50%]"
              : "bg-[#004A7C] w-[200px] h-[200px] rounded-[50%]"
          } top-[50%] left-[50%]  transform -translate-x-[50%] -translate-y-[50%] transition-all duration-1000`}
          onMouseEnter={() => setHoverState(true)}
          onMouseLeave={() => setHoverState(false)}
        >
          <div className=" absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] ease-in-out duration-1000">
            <div
              onMouseEnter={() => setHoverState(true)}
              onMouseLeave={() => setHoverState(false)}
              className={`transform ${
                hoverState ? "scale-125" : "scale-100"
              } transition-all duration-1000 ease-in-out`}
            >
              
        {Icon == 'Game' && (
          <IoGameControllerOutline
          color={hoverState ? "cyan" : "cyan"}
          size={hoverState ? 120 : 90}
          />
        
        )}
        {Icon == 'IG' && (
          <FaInstagram
          color={hoverState ? "cyan" : "cyan"}
          size={hoverState ? 120 : 90}
          />
        
        )}
              <p
                className={` transform text-center font-bold  ${
                  hoverState ? "scale-125" : "scale-100 text-[0px]"
                } transition-all duration-1000 ease-in-out`}
              >
                {hoverState ? text : text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
