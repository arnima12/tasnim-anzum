import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from 'react-icons/ai';
const Footer = () => {
    return (
        <div className="footer-class mt-56 lg:mt-24">
            <div className="container mx-auto px-4 sm:px-5 md:px-10 ">
                <footer className="footer footer-center p-10 text-white rounded w-full">
                    <div>
                        <div className="grid grid-flow-col gap-4">
                            <Link to="https://www.facebook.com/arnima.tasnim.182"><FaFacebookF className="text-2xl" /></Link>
                            <Link to="https://www.instagram.com/tasnim_arnima/"><AiFillInstagram className="text-2xl" /></Link>
                            <Link to="https://www.linkedin.com/in/tasnimanzum/"><FaLinkedinIn className="text-2xl" /></Link>
                        </div>
                    </div>
                    <div>
                        <p className="text-xl font-medium">Copyright © 2023 - All right reserved by Tasnim Anzum</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;