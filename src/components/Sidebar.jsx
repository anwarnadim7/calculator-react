// src/components/Sidebar.js
import React, { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={` right-0 w-[400px] bg-gray-100 text-white p-4 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-200 ease-in-out md:translate-x-0`}>
            <button className="md:hidden p-2 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
            <ul>
                <li className="mb-2">
                    <a href="#link1" className="hover:underline">Link 1</a>
                </li>
                <li className="mb-2">
                    <a href="#link2" className="hover:underline">Link 2</a>
                </li>
                <li className="mb-2">
                    <a href="#link3" className="hover:underline">Link 3</a>
                </li>
                <li className="mb-2">
                    <a href="#link4" className="hover:underline">Link 4</a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
