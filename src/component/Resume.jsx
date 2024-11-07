import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
const Resume = () => {
  return (
    <div className=''>
    <a href='./assets/BDResume.pdf' download>
    <button className='mt-[10px] bg-black h-[48px] w-[300px] text-[22px] font-bold rounded-md text-white  hover:bg-gray-200 flex justify-between items-center px-[25px]'>
        Download Resume
        <div className='ml-auto'>
            <MdOutlineFileDownload />
        </div>
    </button>
    </a>
  </div>
  )
}

export default Resume