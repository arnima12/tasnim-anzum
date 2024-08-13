import React from 'react';
import Publication from './Publication';

const Publications = () => {
    const publications = [
        {
            "_id": "686a759b91f2410596e9c025",
            "name": `Hybrid SVM-Bidirectional Long Short-Term
Memory Model for Fine-Grained Software
Requirement Classification`,
            "published": "August 7, 2024",
            "link": "https://www.jait.us/articles/2024/JAIT-V15N8-914.pdf"
        }]
    return (
        <div className="container mx-auto px-4 sm:px-5 md:px-10 mt-16" id="publications">
            <div data-aos="fade-left">
                <div>
                    <h1 className="text-4xl text-teal-600 font-bold mb-8">Publications</h1>
                </div>
                <div>
                    {
                        publications.map((publication) => (<Publication key={publication._id} publication={publication}></Publication>))
                    }
                </div>
            </div>
        </div>
    );
};

export default Publications;