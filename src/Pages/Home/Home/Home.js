import React from 'react';
import Intro from '../Intro/Intro';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Publications from '../Publications/Publications';
import Education from '../Educations/Education';
const Home = () => {
    return (
        <div>
            <Intro />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Publications />
            <Contact />
        </div>
    );
};

export default Home;