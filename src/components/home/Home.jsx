import React from 'react';
import './home.css';


function Home() {
    return (
        <section className="home" id="home">
            <div className="col">
                <div className='text'>
                    <h2>hi,</h2>
                    <h2>i'm <span className='initial'>j</span>uan</h2>
                    <h2>web developer.</h2>

                    <button className='btn'>contact me</button>
                </div>
            </div>

            <div className='col'>
                <img alt='img'/>
            </div>
        </section>
    );
}

export default Home;