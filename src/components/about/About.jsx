// importing react
import React, { useEffect } from 'react';

// importing aos
import AOS from 'aos';
import "aos/dist/aos.css";

// importing styles
import './about.css';

// importing assets
import img2 from '../../assets/img2.png';


function About() {

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section className="about container" id='about'>
            <div className='about-grid'>
                <div className='about-content' data-aos="fade-left">
                    <h2 className='section-sub'>about me.</h2>
                    <p className='subsection-des'>I consider myself an enthusiastic and empathic person.
                    I began programming in 2021 and I also began my informatic
                    engineering career in 2022. I always keep learning. </p>
                </div>

                <div className='about-img' data-aos="fade-right">
                    <img src={img2} className='img' alt='juan'/>
                </div>
            </div>
        </section>
        );
}

export default About;