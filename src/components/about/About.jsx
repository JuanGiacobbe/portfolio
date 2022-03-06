import React from 'react';
import './about.css';
import img2 from '../../assets/img2.png';


function About() {
    return (
        <section className="about" id='about'>
            <div className='about-grid'>
                <div className='about-content'>
                    <h2 className='section-sub'>about.</h2>
                    <p className='subsection-des'>I consider myself an enthusiastic and empathic person.
                    I began programming in 2021 and I also began my informatic
                    engineering career in 2022. I always keep learning. </p>
                </div>

                <div className='about-img'>
                    <img src={img2} className='img' alt='juan'/>
                </div>
            </div>
        </section>
        );
}

export default About;