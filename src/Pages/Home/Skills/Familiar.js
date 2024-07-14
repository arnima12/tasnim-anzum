import React from 'react';
const Familiar = ({ familiar }) => {
    const { name, img } = familiar;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2 my-16">
            <div className="flex justify-center">
                <img src={img} alt="skill" className="w-12 h-12" />
            </div>
            <p className="text-2xl font-semibold text-teal-600">{name}</p>
        </div>
    );
};

export default Familiar;