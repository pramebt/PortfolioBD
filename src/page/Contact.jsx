import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#FAFAFA] h-screen w-screen scroll-py-10 lg:overflow-hidden">
      <div className="relative  text-center flex flex-col pt-[3%] left-[50%] translate-x-[-50%] text-[48px]">
        <label className="text-[#005691]  font-extrabold">Contact</label>
        <label className="text-[32px] mt-2 font-light">Get In Touch</label>
      </div>
      <div className="relative flex flex-row h-full w-full  mt-[30px] ">
        <div className="relative text-center h-full w-[50%] px-[200px]  space-y-5">
          <label className="text-[28px] font-light">Message Me</label>
          <input
            type="text"
            className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Email"
          />
          <input
            type="text"
            className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Subject"
          />
          <textarea
            type="text"
            className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 resize-y min-h-[100px] max-h-[200px] min-w-[200px] max-w-full"
            placeholder="message"
          />
          <button className="px-6 py-2 font-bold bg-cyan-200 text-black w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-black hover:text-white">
            Submit
          </button>
        </div>
        <div className="relative h-full w-[50%]  pb-[350px] px-[150px] justify-items-center">
          <div className="h-full w-full  rounded-[25px]  shadow-lg overflow-hidden  ">
         
          <img src="https://img.freepik.com/free-photo/beautiful-high-snowy-foggy-mountains-with-snow-being-blown-by-wind_181624-200.jpg?t=st=1731911855~exp=1731915455~hmac=df3bc28774db37f0ed7df7e60eb0c857562bb0720748d43e49f153ed3e478425&w=740" className="h-[850px] w-[100%] mt-[-20%]"/>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
