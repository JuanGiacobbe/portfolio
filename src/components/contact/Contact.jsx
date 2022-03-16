import ContactForm from './ContactForm';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";


export default function Contact() {
    return (
        <div className='contact' id="contact">
            <div className='contact-grid'>
                <div className='contact-container'>
                    <h2 className='section-sub'>Contact me</h2>
                    <p className='subsection-des'>you can leave a message in the
                    form in rigth; or you can contact me in my social media in
                    Github and Instagram clicking in the icons bellow.  </p>

                    <ContactForm />
                    
                </div>
                
                <div className='data-column'>
                    <h3 className='data-title'>Email:</h3>
                    <h3 className='personal-data'>juangiacobbe@gmail.com</h3>
                    <h3 className='data-title'>Number:</h3>
                    <h3 className='personal-data'>123456789</h3>

                    <div className='icons-container'>
                        <h3 className='data-title'>Social media:</h3>

                        <div className='icons'>
                            <FontAwesomeIcon className='icon' icon={faInstagramSquare} />
                            <FontAwesomeIcon className='icon' icon={faGithubSquare} />
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
}