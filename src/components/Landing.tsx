import { Link } from "react-router-dom"
import Marquee from "react-fast-marquee";
function Landing() {
    
    return (
        <>
            <div className="absolute w-screen h-screen z-50 bg-[url('/meningsoy.jpeg')] flex flex-col justify-center items-center xs:flex lg:hidden">
                <div className="text-center flex flex-col justify-center gap-5 bg-blue-100/50 w-screen h-screen p-5 rounded-lg">
                    <div className="py-8 flex flex-col gap-5 bg-white rounded-xl shadow-lg">
                        <h1 className="text-3xl font-bold">{`Please use laptop :>`}</h1>
                        <h1 className="text-xl">{`Saia mager bikin responsive nya ehek`}</h1>
                    </div>
                </div>
            </div>
            <div className="absolute w-screen h-screen z-50 bg-[url('/meningsoy.jpeg')] hidden flex-col justify-center items-center md:flex lg:hidden">
                <div className="text-center flex flex-col justify-center gap-5 bg-blue-100/50 w-screen h-screen p-5 rounded-lg">
                    <div className="py-8 flex flex-col gap-5 bg-white rounded-xl shadow-lg">
                        <h1 className="text-3xl font-bold">{`Mweeeeeeeee jangan dikecilin`}</h1>
                        <h1 className="text-xl">{`Saia mager bikin responsive nya ehek`}</h1>
                    </div>
                </div>
            </div>
            <div className="h-screen w-screen bg-gradient-to-r from-sky-700 to-indigo-700 flex justify-center items-center relative overflow-hidden">
                <Marquee className="!absolute">
                    <img src="/balloon.png" alt="" className="h-screen w-screen" />
                </Marquee>
                <div className="flex justify-center items-center overflow-hidden w-[50%] h-[80%] relative">
                    <img src='/hat.png' className='w-[150px] h-[150px] rounded-full absolute top-0 mt-5 z-30 rotate-45 flipped' />
                    <div className='w-[70%] bg-white/80 p-10 rounded-lg flex flex-col items-center justify-between gap-7 z-20 shadow-lg shadow-white    z'>
                        <img src='/landingPic.jpeg' className='w-[150px] h-[150px] rounded-full' />
                        <div className='flex flex-col items-center gap-1'>
                            <h1 className='text-4xl font-bold'>HAPPY BIRTHDAY!!!</h1>
                            <h1 className='text-lg'>DARI JOEN HANYA UNTUK PENTA</h1>
                        </div>
                        <Link to={"/home"} className="w-full">
                            <button className='bg-[#f2c235] hover:bg-[#d9ae30] w-full py-3 rounded-3xl text-white font-semibold shadow-lg'>{`Come Come, let me show you my magic :>`}</button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;