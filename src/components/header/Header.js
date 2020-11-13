import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to='/sold'>SOLD</Link>
            <Link to='/properties'>PROPERTIES</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/contact'>CONTACT</Link>
        </div>
    )
}

export default Header;