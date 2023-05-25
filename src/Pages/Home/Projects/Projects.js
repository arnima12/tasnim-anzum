import React, { useEffect, useState } from 'react';
import Project from './Project';
import { FcFlashOn } from "react-icons/fc";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('project.json')
            .then(response => response.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className="container mx-auto px-4 sm:px-5 md:px-10 mt-16" id="projects">
            <div data-aos="fade-up-right">
                <div>
                    <div className=" flex justify-center">
                        <h1 className="text-4xl text-slate-800 font-bold">My Projects</h1>
                        <FcFlashOn className="animate__animated animate__flash animate__infinite text-4xl" />
                    </div>
                </div>
                <div className="my-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {
                        projects.map(project => (<Project key={project._id} project={project} />))
                    }
                </div>
            </div>

        </div>
    );
};

export default Projects;