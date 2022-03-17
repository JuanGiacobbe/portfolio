
// importing components
import SkillCard from './SkillCard';

// importing styles
import './Skills.css';


export default function Skills() {
    return (
        <section className='skills container' id='skills'>
            <h2 className='section-title'>My habilities.</h2>
            <p className='section-des'>Here I show you my skill set; 
            this page is completely built with these technologies!</p>

            <div className='skills-container container'>
                <SkillCard />
            </div>
        </section>
    );
}

