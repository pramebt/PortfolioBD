import React from "react";

const Menu = ({ ClickSidebar }) => {
  console.log(ClickSidebar);
  return (
    <div
      className={`fixed z-[10] bg-black  bottom-0 left-0 h-screen w-screen transition-transform duration-300 ${
        ClickSidebar
          ? "translate-y-0 animate-bounce-once"
          : "translate-y-[-100%] animate-bounce-once"
      }`}
    >
      <div
        className="absolute flex flex-col text-[48px] font-extrabold space-y-10 text-center 
        top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
      >
        <a href="/" className="text-white opacity-85 hover:text-cyan-100 hover:text-[52px] hover:text-stroke transition-all duration-300 ease-in-out">
          HOME
        </a>
        <a href="/About" className="text-white opacity-85 hover:text-cyan-100 hover:text-[52px] hover:text-stroke transition-all duration-300 ease-in-out">
          ABOUT
        </a>
        <a href="/Portfolio" className="text-white opacity-85 hover:text-cyan-100 hover:text-[52px] hover:text-stroke transition-all duration-300 ease-in-out">
          PORTFOLIO
        </a>
        <a href="/Contact" className="text-white opacity-85 hover:text-cyan-100 hover:text-[52px] hover:text-stroke transition-all duration-300 ease-in-out">
          CONTACT
        </a>
      </div>
    </div>
  );
};

export default Menu;
