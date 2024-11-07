import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
const Example = () => {
  return (
    <div className="grid place-content-center  ">

      <DrawOutlineButton>
        <div className='my-[5px] text-[22px] font-bold flex flex-row text-white justify-between items-center px-[25px]'>
        Resume
        <div className=''>
            <MdOutlineFileDownload size={30}/>
        </div>
        </div>
        
        </DrawOutlineButton>
    </div>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative bg-black w-[200px] text-slate-100 transition-colors duration-[400ms] hover:text-cyan-200"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[3px] w-0 bg-cyan-200 transition-all duration-200 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[4px] bg-cyan-200 transition-all delay-100 duration-800 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[4px] w-0 bg-cyan-200 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[4px] bg-cyan-200 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default Example;