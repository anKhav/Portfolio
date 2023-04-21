import React, {useState} from 'react';
import {Link} from "gatsby";
import Logo from "../logo/logo";
import {header, nav, link, container,toggler, toggler__content, open} from './header.module.scss'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className={header}>
            <div className={container}>
                <Logo/>
                <button className={toggler} onClick={e => {
                        e.preventDefault()
                        setIsOpen(prevState => !prevState)
                    }
                }>
                    <span className={toggler__content}></span>
                </button>
                <nav className={isOpen ? nav + ' ' + open : nav}>
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