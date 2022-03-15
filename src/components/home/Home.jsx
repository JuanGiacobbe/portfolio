
// importing styles
import './home.css';

// importing components
import CTA from './CTA';

// importing assets
import img2 from '../../assets/img2.png';


export default function Home() {
    return (
        <section className="home container" id="home">
            <div className='home-grid'>
                    <div className='text'>
                        <h2>hi,</h2>
                        <h2>i'm <span className='initial'>j</span>uan</h2>
                        <h2 className='bottom-text'>web developer.</h2>
                        <CTA />
                    </div>
                    
                    <div className='home-img'>
                        <img src={img2} alt='img' className='home-imgs'/>
                    </div>
            </div>
        </section>
    );
}

