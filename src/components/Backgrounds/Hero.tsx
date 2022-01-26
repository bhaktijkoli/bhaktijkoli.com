import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1920"
      height="1080"
      viewBox="0 0 1920 1080"
    >
      <g transform="matrix(0.995, -0.105, 0.105, 0.995, 20.357, 63.591)">
        <rect
          width="1876"
          height="941"
          rx="100"
          transform="translate(21 28)"
          fill="#5a40ca"
        />
        <motion.rect
          initial={{
            y: 770,
          }}
          animate={{
            x: [-92, 92],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            type: "tween",
            duration: 5,
          }}
          width="848"
          height="291"
          rx="100"
          transform="translate(-92 770)"
          fill="#fff"
          opacity="0.046"
        />
        <motion.rect
          initial={{
            y: 300,
          }}
          animate={{
            x: [1133, 1233],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            type: "tween",
            duration: 5,
          }}
          width="869"
          height="426"
          rx="100"
          transform="translate(1133.939 338.211)"
          fill="#fff"
          opacity="0.05"
        />
      </g>
    </svg>
  );
};

export default Hero;
