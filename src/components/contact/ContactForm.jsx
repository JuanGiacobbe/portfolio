import React, { useState } from 'react';
import './ContactForm.css';


export default function ContactForm() {
    const[name, setName] = useState(false);
    const[mail, setMail] = useState(false);

    const activeName = () => {
        if(name === false) {
            setName(true);
        }
    }
    const activeMail = () => {
        if(mail === false) {
            setMail(true);
        }
    }

    return (
        <form className='form'>
            <input type='text' className={`input ? ${name ? 'name-active' : ''}`} onClick={activeName} placeholder='your name'/>
            <input type='email' className={`input ? ${mail ? 'mail-active' : ''}`} onClick={activeMail} placeholder='your email'/>
            <textarea type='text' className='msg' placeholder='message'/>
            <input type='submit' className='submit' value='submit'/>

        </form>
    );
}