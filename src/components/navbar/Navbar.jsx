import React, { useState } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [link, setLink] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true);
        }else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    const changeColor = () => {
        if(window.scrollY >= 80) {
            setLink(true);
        }else {
            setLink(false);
        }
    }
    window.addEventListener('scroll', changeColor);

    return(
        <nav className={`navbar ? ${navbar ? 'sticky' : ''}`}>
            <a href='#home' className={`brand ? ${link ? 'color' : ''}`}>jg.</a>

            <ul className='list'>
                <li><a href='#about' className={`link ? ${link ? 'color' : ''}`}>about me</a></li>
                <li><a href='#projects' className={`link ? ${link ? 'color' : ''}`}>projects</a></li>
                <li><a href='#skills' className={`link ? ${link ? 'color' : ''}`}>skills</a></li>
                <li><a href='#contact' className={`link ? ${link ? 'color' : ''}`}>contact me</a></li>
            </ul>

            <>
                <FontAwesomeIcon className={`hamburger ? ${link ? 'color' : ''}`} icon={faBars} />
            </>
        </nav>
        );
}



export default Navbar;