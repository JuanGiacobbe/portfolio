import React from 'react';
import './Skills.css';
import SkillCard from './SkillCard';


export default function Skills() {
    return (
        <section className='skills' id='skills'>
            <h2 className='section-title'>skills</h2>
            <p className='section-des'>sasdakdsñlaskdñlaksdñlasdkñasdk</p>

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

