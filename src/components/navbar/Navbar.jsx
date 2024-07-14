import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/images/homepage/Logo.png';
import calendar from '../../assets/images/homepage/Calendar.png';
import menu_open from '../../assets/open-mobile.svg';
import close_menu from '../../assets/close-mobile.svg';
import { useState } from 'react';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const location = useLocation();

    const handleClick = () => setClick(!click);

    const isHomepage = location.pathname === '/';

    const navItems = [
        { path: "/rooms", label: "Rooms" },
        { path: "/facilities", label: "Facilities" },
        { path: "/gallery", label: "Gallery" },
        { path: "/about", label: "About Us" },
    ];

    return (
        <nav className='navbar'>
            <div className="container nav-container">
                <div className="nav-left">
                    <div className='logo'>
                        <NavLink to="/">
                            <img className='logo-img' src={logo} alt="Logo" />
                        </NavLink>
                    </div>

                    <ul className={click ? "nav-menu open" : "nav-menu"}>
                        {navItems.map((item, index) => (
                            <li key={index} className="nav-item">
                                <NavLink
                                    to={item.path}
                                    exact="true"
                                    className={`nav-links ${!isHomepage ? 'nav-links-black' : ''}`}
                                    onClick={handleClick}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="nav-right">
                    {isHomepage && (
                        <button className='btn-primary btn nav-btn'>
                            <img src={calendar} alt="Calendar" /> Reservation
                        </button>
                    )}
                    <div className='nav-icon' onClick={handleClick}>
                        {click ? (
                            <img className='open-img' src={close_menu} alt="Close menu" />
                        ) : (
                            <img className='open-img' src={menu_open} alt="Open menu" />
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
