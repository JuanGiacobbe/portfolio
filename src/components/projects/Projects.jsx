import React from 'react';
import './projects.css';
import ProjectCard from './ProjectCard';


function Projects() {
    return (
        <section className='projects' id='projects'>
            <h2 className='section-title'><span className='capitalize'>m</span>y recent work</h2>
            <p className='section-des'>here we have some of my recent projects. 
            i always try to implement the newest technologies that i learn into 
            them. you can see all my work in github.</p>

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