import React from 'react';
const Comfortable = ({ comfortable }) => {
    const { name, img } = comfortable;
    return (
        <div className="grid grid-cols-2 items-center gap-2 my-16">
        <img src={img} alt="skill" className="w-12 h-12" />
        <p className="text-2xl font-semibold">{name}</p>
    </div>
    );
};

export default Comfortable;