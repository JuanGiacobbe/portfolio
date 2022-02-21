import React from 'react';
import './projects.css';
import ProjectCard from './ProjectCard';


function Projects() {
    return (
        <section className='projects' id='projects'>
            <h2 className='section-title'><span className='capitalize'>m</span>y recent work.</h2>
            <p className='section-des'><span className='capitalize'>h</span>ere we have some of my recent projects. 
            <span className='capitalize'>i</span> always try to implement the newest technologies that <span className='capitalize'>i</span> learn into 
            them. <span className='capitalize'>y</span>ou can see all my work in github.</p>

            <div className='pro-grid'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                
            </div>
        </section>
    );
}

export default Projects;