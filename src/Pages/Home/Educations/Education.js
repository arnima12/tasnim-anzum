import React from 'react';
import Institution from './Institution';

const Education = () => {
    const educations = [
        {
            "_id": "686a759b91f2410596e9c025",
            "name": "Bangladesh University Of Professionals",
            "year": "Jan 2024 - Ongoing",
            "degree": "Masters in Information & Communication Technology"
        },
        {
            "_id": "686a759b91f2410596e9c026",
            "name": "Bangladesh University Of Professionals",
            "year": "Jan 2020 - Dec 2023",
            "degree": "Bachelors in Information & Communication Engineering"
        },
        {
            "_id": "686a759b91f2410596e9c027",
            "name": "Holy Cross College",
            "year": "2018",
            "degree": "Higher Secondary Certificate"
        },
        {
            "_id": "686a759b91f2410596e9c028",
            "name": "Shaheed Bir Uttam LT. Anwar Girls' College",
            "year": "2016",
            "degree": "Secondary School Certificate"
        }
    ]
    return (
        <div className="container mx-auto px-4 sm:px-5 md:px-10 mt-16" id="education">
            <div data-aos="fade-left">
                <div>
                    <h1 className="text-4xl text-teal-600 font-bold mb-8">Education</h1>
                </div>
                <div>
                    {
                        educations.map((education) => (<Institution key={education._id} education={education}></Institution>))
                    }
                </div>
            </div>
        </div>
    );
};

export default Education;