import React from 'react';
import './home.css';
import CTA from './CTA';

function Home() {
    return (
        <section className="home" id="home">
            <div className='home-grid'>
                <div className="home-content">
                    <div className='text'>
                        <h2>hi,</h2>
                        <h2>i'm <span className='initial'>j</span>uan</h2>
                        <h2>web developer.</h2>
                        <CTA />
                    </div>
                    
                    <div className='home-img'>
                        <img alt='img'/>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default Home;