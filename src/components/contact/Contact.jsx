import React from 'react';
import ContactForm from './ContactForm';
import './Contact.css';

function Contact() {
    return (
        <div className='contact' id="contact">
            <div className='contact-col'>
                <h2 className='contact-title'>get in touch.</h2>
                <p className='contact-info'>example text</p>
                <div className='icons'>
                    <button className='icon'>github</button>
                    <button className='ucon'>instagram</button>
                </div>
            </div>

            <div className='contact-col'>
                <ContactForm />
            </div>
        </div>


    );
}

export default Contact;