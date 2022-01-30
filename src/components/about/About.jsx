import React from 'react';
import './about.css';

function About() {
    return (
        <div className="about" id='about'>
            <div className='about-col about-text'>
                <h2 className='about-title'>about.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Velit euismod
                in pellentesque massa placerat duis ultricies.
                Donec ultrices tincidunt arcu non sodales neque.
                Phasellus vestibulum lorem sed risus ultricies
                tristique.</p>
            </div>

            <div className='about-col'>
                <img alt='juan'/>
            </div>
        </div>
        );
}

export default About;