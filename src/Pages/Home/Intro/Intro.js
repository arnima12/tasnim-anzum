import React from 'react';
import "./Intro.css"
import tasnim from "../../../image/intro.png"
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai"
AOS.init();
const Intro = () => {
  return (
    <div className="container mx-auto px-4 sm:px-5 md:px-10 " id="intro">
      <div className="intro hero min-h-screen mt-8">
        <div className="hero-content flex flex-col lg:flex-row-reverse">
          <img src={tasnim} alt="intro" className="hidden lg:flex" />
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mt-8 mb-8 text-teal-600" data-aos="fade-down" data-aos-duration="1000">{`<Tasnim Anzum/>`}</h1>
            <h1 className="text-3xl md:text-5xl font-semibold mt-8 text-white text-animate" data-aos="fade-right" data-aos-duration="1000">Software Developer</h1>
            <p className="mt-6 text-2xl text-white">A tech enthusiast with a strong passion for web development who is deeply intrigued by the intricacies of creating optimized solutions and meticulously fixing even the smallest details.</p>
            <div className="flex gap-4 justify-center mt-4">
              <Link to="https://www.facebook.com/tasnim.anzum12"><AiFillFacebook className="text-3xl text-teal-600 animate__animated animate__heartBeat animate__infinite" /></Link>
              <Link to="https://github.com/arnima12"><AiFillGithub className="text-3xl text-teal-600 animate__animated animate__heartBeat animate__infinite" /></Link>
              <Link to="https://www.linkedin.com/in/tasnimanzum/"><AiFillLinkedin className="text-3xl text-teal-600 animate__animated animate__heartBeat animate__infinite" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Intro;