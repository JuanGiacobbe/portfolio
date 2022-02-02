import React from 'react';
import './project-card.css';


export default function ProjectCard() {
    return (
        <div className='project-card'>
            <img alt='img' className='pro-img' />
            <p className='pro-title'>hola</p>
            <p className='pro-des'>lorem lorem lorem lorem
            lorem lorem lorem lorem
            loremlorem</p>
            <button className="pro-link">view on github</button>
        </div>
    );
}

