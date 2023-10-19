import React, { useState } from "react";
import { motion } from "framer-motion";

interface GiftProps {
  children: React.ReactNode;
  open: boolean;
  onClick?: () => void;
}

const GiftCard = ({ open, children, onClick }: GiftProps) => {
//   const [isFlipped, setIsFlipped] = useState(open);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (!isAnimating && open) {
        setIsAnimating(true);
    }
  };

  const onAnimationComplete = () => {
    setIsAnimating(false);
  };

  return (
    <div className="flip-card w-[300px] h-[350px]" onClick={handleFlip}>
      <motion.div
        className="bg-gray-200/50 flex flex-col items-center justify-between rounded-lg hover:shadow-lg flip-card-inner w-[100%] h-[100%]"
        initial={false}
        animate={{ rotateY: open ? 180 : 0 }}
        transition={{ duration: 1 }}
        onAnimationComplete={onAnimationComplete}
      >
        <div className="flip-card-front w-[100%] h-[100%] flex flex-col items-center p-5 justify-between">
          <img src="/gifts/unopenned.png" alt="" className="w-[250px]" />
          <button
            className="w-full py-2 bg-[#f3b84f] rounded-full text-white font-semibold text-lg shadow-md hover:bg-[#c79744]"
            onClick={onClick}
          >
            Choose me
          </button>
        </div>
        <div className="flip-card-back w-[100%] h-[100%] flex flex-col items-center p-5 justify-between">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default GiftCard;
