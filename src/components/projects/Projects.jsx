// importing components
import ProjectCard from './ProjectCard';

// importing styles
import './projects.css';


export default function Projects() {
    return (
        <section className='projects container' id='projects'>
            <h2 className='section-title'>My recent work.</h2>
            <p className='section-des'>
                Here I show you some of my recent projects. 
                I always try to implement the newest technologies that I learn into 
                them. You can see all my work on my <a className='link' href='github.com/JuanGiacobbe' target='_blank'>
                     github profile.
                </a>
            </p>

            <div className='pro-grid'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                
            </div>
        </section>
    );
}