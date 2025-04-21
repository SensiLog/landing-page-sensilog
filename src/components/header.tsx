"use client"

import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="w-full flex justify-between items-center p-6 relative md:justify-around">
            
            {/* Logo - ajustado para não interferir no espaçamento */}
            <div>
                <Image src="/assets/sensilog.png" alt={"sensilog"} width={70} height={70} />
            </div>

            {/* Menu desktop - ajustado para flex-grow */}
            <ul className="hidden md:flex text-2xl gap-8 justify-center">
                <li><a href="#" className="hover:text-gray-600 transition">home</a></li>
                <li><a href="#" className="hover:text-gray-600 transition">about</a></li>
                <li><a href="#" className="hover:text-gray-600 transition">projects</a></li>
                <li><a href="#" className="hover:text-gray-600 transition">contact</a></li>
            </ul>

            {/* Botão do menu hambúrguer - visível apenas no mobile */}
            <button
                className="md:hidden z-50"
                onClick={toggleMenu}
                aria-label="Menu"
            >
                <div className="space-y-2 hover:cursor-pointer">
                    <div className={`w-8 h-1 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-8 h-1 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-8 h-1 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </div>
            </button>

            {/* Menu mobile - aparece com animação */}
            <div className={`
                fixed inset-0 bg-gray/80 backdrop-blur-lg z-40
                flex flex-col items-center justify-center
                transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
                <ul className="text-2xl space-y-8 text-center">
                    <li><a href="#" className="hover:text-gray-600 transition" onClick={toggleMenu}>home</a></li>
                    <li><a href="#" className="hover:text-gray-600 transition" onClick={toggleMenu}>about</a></li>
                    <li><a href="#" className="hover:text-gray-600 transition" onClick={toggleMenu}>projects</a></li>
                    <li><a href="#" className="hover:text-gray-600 transition" onClick={toggleMenu}>contact</a></li>
                </ul>
            </div>
        </header>
    );
}