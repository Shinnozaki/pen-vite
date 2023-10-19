import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface GiftProps {
    children: React.ReactNode;
    open: boolean;
    onClick?: () => void;
}

const GiftCard = ({open, children, onClick}: GiftProps) => {
    // const [isFlipped, setIsFlipped] = useState(open)
    // const [isAnimating, setIsAnimating] = useState(open)
    
    // function handleFlip() {
    //     if (!isAnimating) {
    //         setIsFlipped(true)
    //         setIsAnimating(true)
    //     }
    // }

    return (
        <>
            <div className='flip-card w-[300px] h-[350px]'>
                <motion.div
                    className='bg-gray-200/50 flex flex-col items-center justify-between rounded-lg hover:shadow-lg flip-card-inner w-[100%] h-[100%]'
                    initial={false}
                    animate={{ rotateY: open ? 180 : 360 }}
                    transition={{ duration: 1 }}
                    onAnimationComplete={onClick}
                >
                    <div className='flip-card-front w-[100%] h-[100%] flex flex-col items-center p-5 justify-between'>
                        <img src="/gifts/unopenned.png" alt="" className='w-[250px]' />
                        <button className='w-full py-2 bg-[#f3b84f] rounded-full text-white font-semibold text-lg shadow-md hover:bg-[#c79744]' onClick={onClick}>Choose me</button>
                    </div>
                    <div className='flip-card-back w-[100%] h-[100%] flex flex-col items-center p-5 justify-between'>
                        {children} 
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default GiftCard;