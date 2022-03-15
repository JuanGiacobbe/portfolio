import ContactForm from './ContactForm';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


export default function Contact() {
    return (
        <div className='contact' id="contact">
            <div className='contact-grid'>
                <div className='contact-container'>
                    <h2 className='section-sub'>get in touch.</h2>
                    <p className='subsection-des'>you can leave a message in the
                    form in rigth; or you can contact me in my social media in
                    Github and Instagram clicking in the icons bellow.  </p>

                    <div className='icons'>
                        <a href='instagram.com/juan_giacobbe_' target='_blank'><FontAwesomeIcon  className='icon' icon={faInstagram} /></a>
                        <FontAwesomeIcon className='icon' icon={faGithub} />
                    </div>
                </div>
                
                <div className='form'>
                    <ContactForm />
                </div>
            </div>            
        </div>
    );
}