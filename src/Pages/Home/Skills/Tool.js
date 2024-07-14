import React from 'react';
const Tool = ({ tool }) => {
    const { name, img } = tool
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2 my-16">
            <div className="flex justify-center mb-4">
                <img src={img} alt="skill" className="w-12 h-auto" />
            </div>
            <p className="text-2xl font-semibold text-teal-600">{name}</p>
        </div>
    );
};

export default Tool;