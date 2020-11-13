import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to='/'>
            <div className="header__logo">
                <h4>Silvana Saidian | Realtor</h4>
            </div>
            </Link>
            <div className="header__links">
                <Link to='/sold'>SOLD</Link>
                <Link to='/properties'>PROPERTIES</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
            </div>
        </div>
    )
}

export default Header;