import React, { useRef, useState } from "react";
import { motion } from "motion/react";

export default function ButtonBorderRight({ child }: { child: React.ReactNode }) {
  const firstBorder = useRef<HTMLDivElement>(null);
  const secondBorder = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="w-full h-full p-1"
    >
      <div className="z-10 relative text-sm flex items-center">{child}</div>
      <div className="w-full h-full absolute backdrop-blur-xl top-0 left-0 z-1 rounded-[10px]"></div>
      <motion.div
        className="p-1 rounded-[10px] text-md border-r-30 border-r-(--primary-color) w-full h-full absolute top-0 left-0"
        ref={firstBorder}
        animate={{
          borderRightWidth: isHovered
            ? `${Math.round(firstBorder.current.clientWidth / 1.05)}px`
            : "0px",
          opacity: isHovered ? 1 : 0,
        }}
      ></motion.div>
      <motion.div
        className="p-1 rounded-[10px] text-md border-r-5 border-r-(--accent-color) w-full h-full absolute top-0 right-0 bg-transparent"
        ref={secondBorder}
        animate={{
          borderRightWidth: isHovered
            ? `${Math.round(firstBorder.current.clientWidth / 5)}px`
            : "0px",
          opacity: isHovered ? 1 : 0,
        }}
      ></motion.div>
    </motion.div>
  );
}
