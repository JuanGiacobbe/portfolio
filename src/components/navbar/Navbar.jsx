import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

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
                <li>
                    <a href='#home' onClick={()=> setActiveLink('#home')} className={activeLink === '#home' ? 'active' : ''}
                    >
                        <FontAwesomeIcon  className='nav-icon' icon={faHome} />
                    </a>
                </li>

                <li>
                    <a href='#about' onClick={()=> setActiveLink('#about')} className={activeLink === '#about' ? 'active' : ''}
                    >
                        <FontAwesomeIcon className='nav-icon' icon={faUser} />
                    </a>

                </li>

                <li>
                    <a href='#projects' onClick={()=> setActiveLink('#projects')} className={activeLink === '#projects' ? 'active' : ''}
                    >
                        <FontAwesomeIcon className='nav-icon' icon={faFolder} />
                    </a>

                </li>

                <li>
                    <a href='#skills' onClick={()=> setActiveLink('#skills')} className={activeLink === '#skills' ? 'active' : ''}
                    >
                        <FontAwesomeIcon className='nav-icon' icon={faTools} />
                    </a>

                </li>

                <li>
                    <a href='#contact' onClick={()=> setActiveLink('#contact')} className={activeLink === '#contact' ? 'active' : ''}
                    >
                        <FontAwesomeIcon className='nav-icon' icon={faAddressCard} />
                    </a>

                </li>
            </ul>
        </nav>
    );
}



export default Navbar;