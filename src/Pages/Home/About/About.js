import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./About.css"
AOS.init();
const About = () => {
  return (
    <div className="container mx-auto px-4 sm:px-5 md:px-10 mt-16" id="about">
      <div className="hero min-h-screen " data-aos="fade-up-right">
        <div className="hero-content flex-col lg:flex-row  text-slate-800 gap-16">
          <div className="about-me-container lg:w-1/4">
            <div className="horizontal-line left-line hidden lg:block"></div>
            <div className="about-me-content">
              <h2 className="text-4xl font-bold">About Me</h2>
            </div>
            <div className="horizontal-line right-line  hidden lg:block"></div>
          </div>

          <div className="w-3/4">
            <h1 className="text-2xl lg:text-4xl font-bold lg:leading-[4rem]">Passionate Fresher in Software Development and User-Centric Design</h1>
            <p className="pt-6 lg:text-2xl text-white lg:leading-[3rem]">I'm a passionate software developer with a strong focus on creating engaging and user-friendly web experiences. I have a deep appreciation for the intersection of design and technology, and I love turning ideas into visually stunning and functional websites.</p>
            <p className="pt-4 lg:text-2xl text-white lg:leading-[3rem]">I am a creative problem solver who is constantly seeking opportunities to learn and grow. I enjoy keeping up with industry blogs, attending conferences, and participating in online communities to expand my knowledge and stay inspired.</p>
            <p className="py-4 lg:text-2xl text-white lg:leading-[3rem]">I believe in the power of collaboration and effective communication.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;