import React from 'react';
import './Skills.css';
import SkillCard from './SkillCard';


function Skills() {
    return (
        <div className='skills' id='skills'>
            <h2 className='title'>skills</h2>
            <p className='skill-des'>sasdakdsñlaskdñlaksdñlasdkñasdk</p>

            <div className='skill-row'>
                <SkillCard />
                <SkillCard />
                <SkillCard />
            </div>
        </div>
    );
}

export default Skills;