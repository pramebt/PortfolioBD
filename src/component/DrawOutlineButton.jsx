import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
const Example = () => {
  return (
    <div className="grid place-content-center bg-black w-[300px]">

      <DrawOutlineButton>
        <div className='mt-[10px] text-[22px] font-bold  text-white flex justify-between items-center px-[25px]'>
        Resume
        </div>
        <div className='ml-auto'>
            <MdOutlineFileDownload />
        </div>
        </DrawOutlineButton>
    </div>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative  text-slate-100 transition-colors duration-[400ms] hover:text-cyan-200"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[5px] w-0 bg-cyan-200 transition-all duration-200 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[5px] bg-cyan-200 transition-all delay-100 duration-800 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[5px] w-0 bg-cyan-200 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[5px] bg-cyan-200 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default Example;