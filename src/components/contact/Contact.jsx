import React from 'react';
import ContactForm from './ContactForm';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


function Contact() {
    return (
        <div className='contact' id="contact">
            <div className='contact-col'>
                <h2 className='contact-title'>get in touch.</h2>
                <p className='contact-info'>you can leave a message in the
                form in rigth; or you can contact me in my social media in
                Github and Instagram clicking in the icons bellow.  </p>

                <div className='icons'>
                    <FontAwesomeIcon  className='icon' icon={faInstagram} />
                    <FontAwesomeIcon className='icon' icon={faGithub} />
                </div>
            </div>

            <div>
                <ContactForm />
            </div>
        </div>


    );
}

export default Contact;