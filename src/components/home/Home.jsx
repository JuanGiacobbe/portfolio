import React from 'react';
import './home.css';
import CTA from './CTA';

function Home() {
    return (
        <section className="home" id="home">
            <div className="col">
                <div className='text'>
                    <h2>hi,</h2>
                    <h2>i'm <span className='initial'>j</span>uan</h2>
                    <h2>web developer.</h2>
                </div>
                <CTA />
            </div>


            <div className='col'>
                <img alt='img'/>
            </div>
        </section>
    );
}

export default Home;