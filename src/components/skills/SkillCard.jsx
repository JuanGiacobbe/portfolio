// importing font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";

// importing styles
import './SkillCard.css';

export default function SkillCard() {
    
    let data = [
        {
            id: 1,
            icon: faHtml5,
            text: 'HTML 5',
            class: 'html',
        },
        {
            id: 2,
            icon: faCss3,
            text: 'CSS 3',
            class: 'css',
        },
        {
            id: 3,
            icon: faJs,
            text: 'JavaScript',
            class: 'js',
        },
        {
            id: 4,
            icon: faNode,
            text: 'Node JS',
            class: 'node',
        },
        {
            id: 5,
            icon: faReact,
            text: 'React JS',
            class: 'react',
        },
        {
            id: 6,
            icon: faGitAlt,
            text: 'Git',
            class: 'git',
        },
    ]


    return (
        <div className="skill-grid">
            {data.map((item, index) => {
                return (
                    <div className='skills-box container' key={index}>
                        <FontAwesomeIcon className={`skills-icon ${item.class}`} icon={item.icon} />
                        <p>{item.text}</p>
                    </div>
                )
            })}
        </div>
    );
}

