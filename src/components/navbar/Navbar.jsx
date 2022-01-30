import React, { useState } from 'react';
import './navbar.css';

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
        <nav className={navbar ? 'navbar sticky' : 'navbar'}>
            <a href='#home' className={link ? 'brand color' : 'brand'}>jg.</a>

            <ul className='list'>
                <li><a href='#about' className={link ? 'link color' : 'link'}>about me</a></li>
                <li><a href='#projects' className={link ? 'link color' : 'link'}>projects</a></li>
                <li><a href='#skills' className={link ? 'link color' : 'link'}>skills</a></li>
                <li><a href='#contact' className={link ? 'link color' : 'link'}>contact me</a></li>

            </ul>
        </nav>
        );
}



export default Navbar;