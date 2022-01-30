import React from 'react';
import './navbar.css';

const Navbar = () => {
    return(
        <nav className='navbar'>
            <a href='#home' className='brand'>jg.</a>

            <ul className='list'>
                <li><a href='#about' class='link'>about me</a></li>
                <li><a href='#projects' class='link'>projects</a></li>
                <li><a href='#skills' class='link'>skills</a></li>
                <li><a href='#contact' class='link'>contact me</a></li>

            </ul>
        </nav>
        );
}



export default Navbar;