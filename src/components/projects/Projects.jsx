import React from 'react';
import './projects.css';
import ProjectCard from './ProjectCard';


export default function Projects() {
    return (
        <section className='projects' id='projects'>
            <h2 className='section-title'>My recent work.</h2>
            <p className='section-des'>Here we have some of my recent projects. 
             I always try to implement the newest technologies that I learn into 
            them. You can see all my work in github.</p>

            <div className='pro-grid'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                
            </div>
        </section>
    );
}