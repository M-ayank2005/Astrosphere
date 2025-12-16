import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleGetStartedClick = () => {
        window.location.href = "/loginPage";
    };

    return (
        <nav className="fixed w-full z-20 top-0 start-0 border-b border-gray-800/70 bg-slate-950/70 backdrop-blur-xl">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/home" className="flex items-center space-x-3 group">
                    <img
                        src="https://www.pngitem.com/pimgs/m/75-751597_astrology-icon-hd-png-download.png"
                        alt="AstroSphere logo"
                        className="h-9 w-9 rounded-xl bg-slate-900 border border-slate-700 shadow-lg shadow-emerald-500/40 group-hover:scale-105 transition-transform duration-300 object-cover"
                    />
                    <span className="text-2xl font-bold text-gradient">
                        AstroSphere
                    </span>
                </a>

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        type="button"
                        className="cosmic-button cosmic-button--primary"
                        onClick={handleGetStartedClick}
                    >
                        Get started
                    </button>
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-400 rounded-lg md:hidden hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>

                <div
                    className={`items-center justify-between ${
                        isMenuOpen ? "flex" : "hidden"
                    } w-full md:flex md:w-auto md:order-1`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-800/70 rounded-2xl bg-slate-950/70 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-emerald-400 md:p-0"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-slate-300 rounded hover:text-emerald-400 hover:bg-slate-900/60 md:hover:bg-transparent md:p-0"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-slate-300 rounded hover:text-emerald-400 hover:bg-slate-900/60 md:hover:bg-transparent md:p-0"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-slate-300 rounded hover:text-emerald-400 hover:bg-slate-900/60 md:hover:bg-transparent md:p-0"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
