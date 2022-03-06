import React from 'react';
import CV from '../../assets/CV-Juan-Ignacio-Giacobbe.pdf';
import './cta.css';

export default function CTA() {
	return(
		<div className='cta'>
			<a href={CV} className='btn home-btn' download>Download CV</a>
			<a href='#contact' className='btn home-btn'>Let's talk</a>
		</div>
	)
}