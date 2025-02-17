import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/layouts.css'

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="#home" className="link">HOME</Link>
                        </li>
                        <li>
                            <Link to="/" className="link">ABOUT ME</Link>
                        </li>
                        <li>
                            <Link to="/" className="link">SKILLS</Link>
                        </li>
                        <li>
                            <Link to="/" className="link">PROJECTS</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header