import React from "react"
import { Link } from "react-router-dom"

function Landing() {
    return (
        <>
            <div className="h-screen w-screen bg-gradient-to-r from-sky-700 to-indigo-700 flex justify-center items-center relative overflow-hidden">
                <div className='w-1/3 bg-white/70 p-10 rounded-lg flex flex-col items-center justify-between gap-7 drop-shadow-lg'>
                    <img src='/landingPic.jpeg' className='w-[150px] h-[150px] rounded-full' />
                    <div className='flex flex-col items-center gap-1'>
                        <h1 className='text-4xl font-bold'>HAPPY BIRTHDAY!!!</h1>
                        <h1 className='text-lg'>DARI JOEN HANYA UNTUK PENTA</h1>
                    </div>
                    <Link to={"/home"} className="w-full">
                        <button className='bg-[#d9ae30] w-full py-3 rounded-3xl text-white font-semibold shadow-lg'>{`Come Come, let me show you my magic :>`}</button>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default Landing;