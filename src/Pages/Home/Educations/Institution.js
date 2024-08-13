import React from 'react';

const Institution = ({ education }) => {
    const { name, year, degree } = education;
    return (
        <div className="hero lg:my-16">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse lg:gap-16 w-full">
                <div><p className="text-2xl font-medium text-white w-[30rem] md:block hidden">{year}</p></div>
                <div className="w-[15rem] sm:w-[20rem] md:w-[30rem]">
                    <h1 className="text-3xl font-bold text-teal-600">{name}<span className="md:hidden">({year})</span></h1>
                    <p className="py-6 text-xl font-medium text-white">{degree}</p>
                </div>
            </div>
        </div>
    );
};

export default Institution;