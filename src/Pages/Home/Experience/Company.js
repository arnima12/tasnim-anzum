import React from 'react';
import 'animate.css';
import { BsFillRocketTakeoffFill } from "react-icons/bs";
const Company = ({ company }) => {
  const { name, year, description } = company;
  return (
    <div className="hero lg:my-16">
      <div className="hero-content flex-col lg:flex-row lg:gap-16">
        <div><p className="text-2xl font-medium md:block hidden">{year}</p></div>
        <div className="divider divider-horizontal"><BsFillRocketTakeoffFill className="md:text-9xl text-blue-700 animate__animated animate__heartBeat animate__infinite hidden lg:block" /></div>
        <div>
          <h1 className="text-3xl font-bold text-white">{name}<span className="md:hidden">({year})</span></h1>
          <p className="py-6 text-xl font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Company;