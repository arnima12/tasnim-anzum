import React, { useEffect, useState } from 'react';
import "./Skills.css";
import Comfortable from './Comfortable';
import Expertise from './Expertise';
import Familiar from './Familiar';
import Tool from './Tool';
const Skills = () => {
    const [expertiseData, setExpertiseData] = useState([]);
    const [comfortables, setComfortables] = useState([]);
    const [familiars, setFamiliars] = useState([]);
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('expertise.json')
            .then(response => response.json())
            .then(data => setExpertiseData(data))
    }, [])
    useEffect(() => {
        fetch('comfortable.json')
            .then(response => response.json())
            .then(data => setComfortables(data))
    }, [])
    useEffect(() => {
        fetch('familiar.json')
            .then(response => response.json())
            .then(data => setFamiliars(data))
    }, [])
    useEffect(() => {
        fetch('tools.json')
            .then(response => response.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className="container mx-auto px-4 sm:px-5 md:px-20 mt-24" id="skills" data-aos="fade-up">
            <div>
                <div className="container">
                    <div className="skill-horizontal-line skill-left-line  hidden lg:block"></div>
                    <p className="content text-4xl text-slate-800 font-bold">My Skill Book</p>
                    <div className="skill-horizontal-line skill-right-line  hidden lg:block"></div>
                </div>
                <div className="my-16 px-12">
                    <div className="mt-8">
                        <h2 className="text-3xl font-semibold text-white">Expertise</h2>
                        <div>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-4">
                                {
                                    expertiseData.map((expertise) => <Expertise key={expertise._id} expertise={expertise} />)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="mt-8">
                            <h2 className="text-3xl font-semibold text-white">Comfortable</h2>
                            <div className="flex gap-8 items-center justify-center">
                                {
                                    comfortables.map(comfortable => <Comfortable key={comfortable._id} comfortable={comfortable} />)
                                }
                            </div>
                        </div>
                        <div className="mt-8">
                            <h2 className="text-3xl font-semibold text-white">Familiar</h2>
                            <div className="flex gap-8 items-center justify-center">
                                {
                                    familiars.map(familiar => <Familiar key={familiar._id} familiar={familiar} />)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-3xl font-semibold text-white">Tools</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-4 items-center place-items-center">
                            {
                                tools.map(tool => <Tool key={tool._id} tool={tool} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;