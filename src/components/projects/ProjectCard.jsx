import React from 'react';
import './project-card.css';
import img1 from '../../assets/img1.png';

export default function ProjectCard() {
    return (
        <div className='project-card'>
            <img alt='img' src={img1} className='pro-img' />
            <p className='pro-title'>hola</p>
            <p className='pro-des'>lorem lorem lorem lorem
            lorem lorem lorem lorem
            lorem lorem</p>
            <div className='pro-links'>
                <button className="pro-link">Open in github</button>
            </div>
        </div>
    );
}

