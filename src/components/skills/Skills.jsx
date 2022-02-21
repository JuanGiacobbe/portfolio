import React from 'react';
import './Skills.css';
import SkillCard from './SkillCard';


export default function Skills() {
    return (
        <section className='skills' id='skills'>
            <h2 className='section-title'><span className='capitalize'>m</span>y habilities.</h2>
            <p className='section-des'><span className='capitalize'>h</span>ere I show you my set of skills; 
            this page is completely built with these technologies!</p>

            <div className='skills-container'>
                <SkillCard />
            </div>
        </section>
    );
}

