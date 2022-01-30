import React from 'react';
import './ContactForm.css';


function ContactForm() {
    return (
        <form className='form'>
            <input type='text' className='input' placeholder='your name'/>
            <input type='email' className='input' placeholder='your email'/>
            <textarea type='text' className='input msg' placeholder='message'/>
            <input type='submit' className='submit' value='submit'/>

        </form>
    );
}

export default ContactForm;