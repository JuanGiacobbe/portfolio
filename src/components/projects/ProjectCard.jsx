import React from 'react';
import './project-card.css';


export default function ProjectCard() {
    return (
        <div className='project-card'>
            <img alt='img' className='pro-img' />
            <p className='pro-title'>hola</p>
            <p className='pro-des'>loremloremloremloremloremloremloremloremloremlorem</p>
            <a href="#" className="pro-link">view project</a>
        </div>
    );
}

