// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
    return (
        <nav className=" bg-gray-800 text-white p-4 w-full ">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">Calculator</div>
                <ul className="hidden md:flex space-x-4">
                    <li>
                        <a href="#home" className="hover:underline">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:underline">Financial</a>
                    </li>
                    <li>
                        <a href="#services" className="hover:underline">Fitness</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:underline">Contact</a>
                    </li>
                </ul>
                <button className="md:hidden p-2 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
