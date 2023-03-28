import React from 'react';
import {Link} from "gatsby";
import Logo from "../logo/logo";
import {header, nav, link, container} from './header.module.scss'

const Header = () => {
    return (
        <header className={header}>
            <div className={container}>
                <Logo/>
                <nav className={nav}>
                    <Link className={link} to="/">Home</Link>
                    <Link className={link} to="/about">About</Link>
                    <Link className={link} to="/projects">Projects</Link>
                    <Link className={link} to="/contacts">Contacts</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;