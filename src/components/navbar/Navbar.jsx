import React, { useState } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faFolder} from '@fortawesome/free-solid-svg-icons';
import {faTools} from '@fortawesome/free-solid-svg-icons';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    const [activeLink, setActiveLink] = useState('#home');

    return(
        <nav className='navbar'>
            <ul className='list'>
                <a href='#home' onClick={()=> setActiveLink('#home')} className={activeLink === '#home' ? 'active' : ''}><FontAwesomeIcon  className='nav-icon' icon={faHome} /></a>
                <a href='#about' onClick={()=> setActiveLink('#about')} className={activeLink === '#about' ? 'active' : ''}><FontAwesomeIcon className='nav-icon' icon={faUser} /></a>
                <a href='#projects' onClick={()=> setActiveLink('#projects')} className={activeLink === '#projects' ? 'active' : ''}><FontAwesomeIcon className='nav-icon' icon={faFolder} /></a>
                <a href='#skills' onClick={()=> setActiveLink('#skills')} className={activeLink === '#skills' ? 'active' : ''}><FontAwesomeIcon className='nav-icon' icon={faTools} /></a>
                <a href='#contact' onClick={()=> setActiveLink('#contact')} className={activeLink === '#contact' ? 'active' : ''}><FontAwesomeIcon className='nav-icon' icon={faAddressCard} /></a>
            </ul>
        </nav>
    );
}



export default Navbar;