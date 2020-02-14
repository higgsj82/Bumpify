import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentUser, logout }) => {
    const headerLinks = () => (
        <header className='main-header'>
            <div className='header-logo'>
                <a href="/"><img className='logo' src={window.headerLogo} /></a>
            </div>
            <div className='header no-session'>
                <div className='link-container'>
                    <a href='https://www.linkedin.com/in/ja-lisha-higgs-b8331a42' target="_blank">LinkedIn</a>
                    <a href='https://github.com/higgsj82' target="_blank">GitHub</a>
                    <a href='https://github.com/higgsj82/Bumpify' target="_blank">Download</a>
                    <p className='link-divider'>｜</p>
                    <Link to='/signup' className='session-links'>Sign Up</Link>
                    <Link to='/login' className='session-links'>Log In</Link>
                </div>
            </div>
        </header>
    )

    const userLinks = () => (
        <header className='main-header'>
            <div className='header-logo'>
                <a href="/"><img className='logo' src={window.headerLogo} /></a>
            </div>
            <div className='header session'>
                <div className='link-container'>
                    <a href='https://www.linkedin.com/in/ja-lisha-higgs-b8331a42' target="_blank">LinkedIn</a>
                    <a href='https://github.com/higgsj82' target="_blank">GitHub</a>
                    <a href='https://github.com/higgsj82/Bumpify' target="_blank">Download</a>
                    <button onClick={logout} className='session-links'>Log Out</button>
                </div>
            </div>
        </header>
    )

    return currentUser ? userLinks() : headerLinks()
}

export default Header;