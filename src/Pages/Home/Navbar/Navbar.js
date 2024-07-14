import React from 'react';
import "./Navbar.css"
import logo from "../../../image/ta-removebg-preview.png"
import { Link } from 'react-router-dom';
const Navbar = () => {
    const menuItems = <React.Fragment>
        <li><a href="#intro">Intro</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </React.Fragment>
    return (
        <div className="navbar text-white fixed top-0 z-10 text-xl">
            <div className="navbar-start px-6">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/"><img src={logo} alt="Tasnim" className="h-10 animate-bounce" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end px-4">
                <Link to="https://mega.nz/file/hGF0jCpK#-BRtM0cAVuEF0ETtjXO4zYeFtrD-0cDcgtUwu6uqnBs" download="Tasnim_Anzum.pdf">
                    <button className="text-xl border-2 p-2 rounded-lg border-teal-600">
                        Resume
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default Navbar;