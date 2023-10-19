import React from "react";
import Navbar from "./Navbar";
import hallJSON from "../data/hall.json";
import { useState } from "react";

function Hall() {
    const [hall, setHall] = useState(hallJSON);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        if (category === "All") {
            setHall(hallJSON);
        } else {
            const filteredHall = hallJSON.filter(item => item.category === category);
            setHall(filteredHall);
        }
        console.log(category)
    };
    return (
        <>
            <div className="w-screen bg-[#474284]">
                <Navbar />
                <div className="w-screen mt-10 flex flex-col items-center">
                    <div className="flex flex-col gap-5 text-center mb-10">
                        <h1 className="text-white font-bold text-5xl">Hall of Pentod</h1>
                        <div>
                            <p className="text-white font-normal text-lg">Sangat natsukashii melihat kembali kenangan" yg tertera pada setiap gambar :,v</p>
                            <p className="text-white font-normal text-lg">Mweeeeeeeee banyak foto yg dh ilang, jadi cuma dapat segini</p>
                        </div>
                    </div>

                    <div className="bg-[#5a53ad] w-4/5 p-10 shadow-lg">
                        <select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)} className="mb-8 p-3 w-[300px] rounded-lg font-semibold shadow-md bg-gray-200">
                            <option value="All">All Pics</option>
                            <option value="fav">Top 10 Fav Pics</option>
                            <option value="kawai">Penta Kawaiii</option>
                            <option value="kakoi">Penta Kakoiii Ahhh~</option>
                            <option value="autis">Pentod Autis</option>
                        </select>
                        <div className="flex flex-wrap justify-between">
                            {hall.map((item, index) => (
                                <>
                                    <div key={index} className="w-[350px] h-[350px] my-5 relative">
                                        <img src={item.img} className="w-[350px] h-[350px] rounded-lg shadow-lg"/>
                                        <div className="p-5 w-full h-full absolute bottom-0 text-[#201a5e] hover:bg-gradient-to-t from-gray-200/90 to-gray-200/30 opacity-0 hover:opacity-100 transition duration-300 flex justify-center items-end font-bold text-xl rounded-lg">{item.name}</div>
                                    </div>
                                </>
                            ))

                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hall;