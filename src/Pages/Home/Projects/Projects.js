import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
    }, []);

    return (
        <div className="container mx-auto px-4 sm:px-5 md:px-10 mt-16" id="projects">
            <div data-aos="fade-up-right">
                <div>
                    <div className="flex justify-center">
                        <h1 className="text-4xl text-teal-600 font-bold">My Projects</h1>
                        <FcFlashOn className="animate__animated animate__flash animate__infinite text-4xl" />
                    </div>
                </div>
                <div className="my-16 w-[20rem] sm:w-[30rem] md:w-[45rem]">
                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        infiniteLoop
                        useKeyboardArrows
                        dynamicHeight
                    >
                        {
                            projects.map(project => (
                                <div key={project._id}>
                                    <Project project={project} />
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Projects;
