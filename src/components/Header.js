import React from "react";
import "./Header.css"
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    return (
        <header>
            <a href="#" id="logo">sihyunlights</a>
            <nav>
                <ul>
                    <li>
                        <Link
                        to='/'
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                        >introduction</Link>
                    </li>
                    <li>
                        <Link
                        to='/projects'
                        className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
                        >projects</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;