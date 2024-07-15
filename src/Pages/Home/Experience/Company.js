import React from 'react';
import 'animate.css';
import './Company.css';
import { BsFillRocketTakeoffFill } from "react-icons/bs";
const Company = ({ company }) => {
  const { name, year, description } = company;
  return (
    <div className="hero lg:my-16">
      <div className="hero-content flex-col lg:flex-row lg:gap-16 w-full">
        <div><p className="text-2xl font-medium text-white w-[30rem] md:block hidden">{year}</p></div>
        <div className="divider divider-horizontal"><BsFillRocketTakeoffFill className="md:text-9xl w-[20rem] text-blue-700 animate__animated animate__heartBeat animate__infinite hidden lg:block" /></div>
        <div className="w-[15rem] sm:w-[20rem] md:w-[30rem]">
          <h1 className="text-3xl font-bold text-teal-600">{name}<span className="md:hidden">({year})</span></h1>
          <p className="py-6 text-xl font-medium text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Company;