// ./src/components/Navbar.jsx

import React from 'react'
import logoImage from "/src/assets/image.png"
import "./navbar.scss"


const Navbar = () => {
    return (
        <div className="navbar">
<img src={logoImage} alt="Logo" className="navbar__logo" />
        </div>
    );
};

export default Navbar;
