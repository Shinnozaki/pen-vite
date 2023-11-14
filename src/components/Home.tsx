import React from "react";
import Navbar from "./Navbar";

function Home() {
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
            <div className="h-screen w-screen overflow-hidden relative bg-[#6a8167] flex-col justify-center hidden lg:flex">
                <img src="/home.jpeg" alt="" className="absolute top-0 left-0 h-full z-1 overflow-hidden" />
                <Navbar />
                <div className="h-full w-1/2 bg-[#6a8167]/90 text-white flex flex-col justify-center px-10 gap-7 z-20 relative overflow-hidden">
                    <h1 className="text-4xl font-black mb-5">{`HAPPY BIRTHDAY PENNN <3`}</h1>
                    <p className="text-lg">
                        {`Selamat menginjak umur 22!!! semoga ko dapat mencapai hal-hal yang ko inginkan,
                                hal-hal yang telah membuat ko bekerja begitu keras. Aku yakin selama kita ga menyerah,
                                kita pasti dapat mencapainya! only time will tell :>
                            `}
                    </p>
                    <p className="text-lg">
                        Terima kasih sudah menjadi bagian dari hidupku, terima kasih sudah meluangkan waktu-waktu ko untuk bersamaku,
                        terima kasih sudah sangat sangat sangaaat sabar menghadapiku ehek, terima kasih sudah menjadi pelangi yang mewarnai hari-hariku <s>{`(artinya kau gay xixixi)`}</s>
                    </p>
                    <p className="text-lg">
                        {`You're my #1 emotional support, I Love You *emoji kiss 3x* :>`}
                    </p>
                </div>

            </div>
        </>
    )
}

export default Home;