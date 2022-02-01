import React from 'react';
import './about.css';

function About() {
    return (
        <div className="about" id='about'>
            <div className='about-col1 about-text'>
                <h2 className='about-title'>about.</h2>
                <p>I consider myself an enthusiastic and empathic person.
                I began programming in 2021 and I also began my informatic
                engineering career in 2022. I always keep learning. </p>
            </div>

            <div className='about-col2'>
                <img alt='juan'/>
            </div>
        </div>
        );
}

export default About;