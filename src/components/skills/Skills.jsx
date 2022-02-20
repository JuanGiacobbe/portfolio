import React from 'react';
import './Skills.css';
import SkillCard from './SkillCard';


export default function Skills() {
    return (
        <section className='skills' id='skills'>
            <h2 className='section-title'><span className='capitalize'>s</span>kills</h2>
            <p className='section-des'>here I show you my set of skills; 
            this page is completely built with these technologies!</p>

            <div className='skill-grid'>
                <SkillCard />
                <SkillCard />
                <SkillCard />
                <SkillCard />
                <SkillCard />
                <SkillCard />
                <SkillCard />
                <SkillCard />

            </div>
        </section>
    );
}

