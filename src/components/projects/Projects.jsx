import React from 'react';
import './projects.css';
import ProjectCard from './ProjectCard';


function Projects() {
    return (
        <section className='projects' id='projects'>
            <h2 className='section-title'>my recent work</h2>

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