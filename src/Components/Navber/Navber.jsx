import React, { useState } from 'react'
import { NavLink } from "react-router";

const Navber = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    return (
        <header className="shadow-md bg-white p-4">
            <div className="container">
                <div className="flex justify-between items-center">

                    <h1 className="font-bold text-xl">Logo</h1>

                    <ul className="flex gap-6 items-center">

                        <li><NavLink to="/" className="hover:text-blue-600">Home</NavLink></li>
                        <li><NavLink to="/about" className="hover:text-blue-600">About</NavLink></li>
                        <li><NavLink to="/hoc" className="hover:text-blue-600">HOC</NavLink></li>
                        {/* Dropdown  */}
                        <li className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="hover:text-blue-600 flex items-center gap-1">
                                Feature
                                <span
                                    className={`duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'
                                        }`}>
                                    <i className="fa-solid fa-angle-down"></i>
                                </span>
                            </button>
                            <div>
                                {
                                    isDropdownOpen ?
                                        <ul className="absolute top-8 left-0 bg-white shadow-md rounded-md w-40 py-2">
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Design</li>
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Development</li>
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Marketing</li>
                                        </ul> :
                                        <ul></ul>
                                }
                            </div>
                        </li>

                        <li><NavLink to="/contact" href="#" className="hover:text-blue-600">Contact</NavLink></li>
                    
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navber