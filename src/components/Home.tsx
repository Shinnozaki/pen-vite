import React from "react";
import Navbar from "./Navbar";

function Home() {
    return (
        <div className="h-screen w-screen overflow-hidden relative bg-[#6a8167] flex flex-col justify-center">
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
    )
}

export default Home;