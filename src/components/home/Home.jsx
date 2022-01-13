import React from 'react';
import './home.css';


function Home() {
    return (
        <section className="home" id="home">
            <div className="col">
                <div className='text'>
                    <h2>hello, my name <span>is</span></h2>
                    <h2 className='name'>juan giacobbe</h2>
                    <h2>developer</h2>
                </div>
            </div>

            <div className='col'>
                <img alt='img'/>
            </div>
        </section>
    );
}

export default Home;