import React from 'react';
import './navbar.css';

const Navbar = () => {
    return(
        <nav className='navbar'>
            <a href='#home' className='brand'>Juan Giacobbe</a>

            <ul className='list'>
                <li><a href='#home'>home</a></li>
                <li><a href='#projects'>projects</a></li>
                <li><a href='#skills'>skills</a></li>
                <li><a href='#contact'>contact me</a></li>

            </ul>
        </nav>
        );
}



export default Navbar;