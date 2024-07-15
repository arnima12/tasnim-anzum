import React from 'react';
import "./Project.css";
import { Link } from 'react-router-dom';
import { BiLinkExternal } from "react-icons/bi";
const Project = ({ project }) => {
    const { name, img, link, description } = project;
    return (
        <div className="project-container">
            <div className="project-box relative flex border rounded-lg">
                <img src={img} alt="projectBox" className="h-72 w-[60%] " />
                <div className="project-layer absolute bottom-0 left-0 w-[100%] h-[100%] flex flex-col justify-center text-center text-white">
                    <div className='text-black '>
                        <h4 className="text-3xl font-bold">{name}</h4>
                        <p className="text-md px-2 font-semibold">{description}</p>
                        <div className="flex justify-center mt-4 "><Link to={link}><BiLinkExternal className="text-4xl border-2 rounded-full bg-white text-black p-2" /></Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;