import React from 'react';
import './navbar.css';

const Navbar = () => {
    return(
        <nav className='navbar'>
            <a href='#home' className='brand'>jg.</a>

            <ul className='list'>
                <li><a href='#home' class='link'>home</a></li>
                <li><a href='#projects' class='link'>projects</a></li>
                <li><a href='#skills' class='link'>skills</a></li>
                <li><a href='#contact' class='link'>contact me</a></li>

            </ul>
        </nav>
        );
}



export default Navbar;