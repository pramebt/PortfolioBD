import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
  } from "framer-motion";
  import { FiMousePointer } from "react-icons/fi";
  
  const HoverCard = () => {
    return (
      <div className="grid w-full place-content-center bg-gradient-to-brpx-4  text-slate-900">
        <TiltCard />
      </div>
    );
  };
  
  const ROTATION_RANGE = 32.5;
  const HALF_ROTATION_RANGE = 32.5 / 2;
  
  const TiltCard = () => {
    const ref = useRef(null);
  
    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const xSpring = useSpring(x);
    const ySpring = useSpring(y);
  
    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
  
    const handleMouseMove = (e) => {
      if (!ref.current) return [0, 0];
  
      const rect = ref.current.getBoundingClientRect();
  
      const width = rect.width;
      const height = rect.height;
  
      const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
      const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
  
      const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
      const rY = mouseX / width - HALF_ROTATION_RANGE;
  
      x.set(rX);
      y.set(rY);
    };
  
    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };
  
    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
        className="relative h-[290px] w-[290px] rounded-xl bg-gradient-to-br from-blue-950 to-cyan-200"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
        >
          <img src="./assets/profile.png" className="rounded-lg"/>
          
        </div>
      </motion.div>
    );
  };

  export default HoverCard;