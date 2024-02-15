import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Company from './Company';
AOS.init();
const Experience = () => {
    const experience = [
        {
            "_id": "646a759b91f2410596e9c024",
            "name": "Sheba Web Technology LLC",
            "year": "June 2023 - July 2023",
            "position": "Intern Web Developer",
            "description": "Designed and developed a job searching and an academic website."
        },
        {
            "_id": "646a759b91f2410596e9c023",
            "name": "INVIXO",
            "year": "December 2022 - January 2023",
            "position": "Web Developer",
            "description": "Designed and developed the home page of a digital agency website."
        }

    ]
    return (
        <div className="container mx-auto px-4 sm:px-5 md:px-10 mt-16" id="experience">
            <div data-aos="fade-left">
                <div>
                    <h1 className="text-4xl text-slate-800 font-bold">Experience</h1>
                </div>
                <div>
                    {
                        experience.map((company) => (<Company key={company._id} company={company}></Company>))
                    }
                </div>
            </div>
        </div>
    );
};

export default Experience;