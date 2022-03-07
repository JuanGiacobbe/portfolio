import React from 'react';
import CV from '../../assets/CV-Juan-Ignacio-Giacobbe.pdf';
import './cta.css';

export default function CTA() {
	return(
		<div className='cta'>
			<a href={CV} className='btn cv-btn' download>Download CV</a>
			<a href='#contact' className='btn contact-btn'>Let's talk</a>
		</div>
	)
}