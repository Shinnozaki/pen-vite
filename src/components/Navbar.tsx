import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="flex justify-between items-center bg-gray-200 p-6 text-[#474284] font-semibold drop-shadow-lg">
                <div className="text-3xl font-bold">
                    © 21-Nov-2023
                </div>
                <div className="flex gap-10 items-center text-2xl">
                    <NavLink to="/home" className="active:underline">Home</NavLink>
                    <NavLink to="/hall" className="active:underline">Hall of Pentod</NavLink>
                    <NavLink to="/gift">
                        <button className="bg-[#d6af38] text-white p-3 rounded-lg drop-shadow-md">CLAIM GIFT HERE!!!</button>
                    </NavLink>

                </div>
            </div>
        </>
    )
}

export default Navbar;