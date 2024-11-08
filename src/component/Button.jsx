const NeuButton = () => {
    return (
    
      <div className="flex items-center justify-center">
        <a href='./assets/BDResume.pdf' download>
        <button className="px-6 py-2 font-bold bg-cyan-200 text-black w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-black hover:text-white">
          RESUME
        </button>
        </a>
      </div>
      
    );
  };
  
  export default NeuButton;