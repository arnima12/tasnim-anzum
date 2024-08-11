import React from 'react';
import { Link } from 'react-router-dom';

const Publication = ({ publication }) => {
    const { name, published } = publication;
    return (
        <div className="hero lg:my-16">
            <div className="hero-content flex-col lg:flex-row lg:gap-16 w-full">
                <div><p className="text-2xl font-medium text-white w-[30rem] md:block hidden">{published}</p></div>
                <div className="divider divider-horizontal"></div>
                <div className="w-[15rem] sm:w-[20rem] md:w-[30rem]">
                    <h1 className="text-3xl font-bold text-white hover:text-teal-400"><Link to="https://www.jait.us/articles/2024/JAIT-V15N8-914.pdf">{name}</Link><span className="md:hidden">({published})</span></h1>
                </div>
            </div>
        </div>
    );
};

export default Publication;