import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
import Intro from '../Home/Intro/Intro';
import About from '../Home/About/About';
import Skills from '../Home/Skills/Skills';
import Experience from '../Home/Experience/Experience';
import Projects from '../Home/Projects/Projects';
import Contact from '../Home/Contact/Contact';
import Publications from '../Home/Publications/Publications';
const Main = () => {
    return (
        <div>
            <Navbar />
            <Intro />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Publications />
            <Contact />
            <Footer />
        </div>
    );
};

export default Main;