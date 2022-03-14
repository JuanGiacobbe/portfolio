// importing react-router components 
import { NavLink } from 'react-router-dom'

// importing styles and assets
import CV from '../../assets/CV-Juan-Ignacio-Giacobbe.pdf';
import './cta.css';

export default function CTA() {
	return(
		<div className='cta'>
			<a href={CV} className='btn cv-btn' download>Download CV</a>
			<NavLink to='contact' className='btn contact-btn'>Let's talk</NavLink>
		</div>
	)
}