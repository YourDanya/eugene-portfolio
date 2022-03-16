import React, {useEffect, useState,} from 'react'
import {AiOutlineInstagram} from "react-icons/ai";
import Link from "next/link";

const Nav: React.FC = () => {

    const [show, setShow] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [hamburgerActive, setActive] = useState(false)

    const handleNav = () => {
        console.log('last scroll', lastScrollY)
        console.log('window scroll', window.scrollY)
        if (!hamburgerActive) {
            if (window.scrollY > lastScrollY) {
                setShow(false);
            } else {
                setShow(true);
            }
            setLastScrollY(window.scrollY);
        }
    }

    useEffect(() => {

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleNav);

            return () => {
                window.removeEventListener('scroll', handleNav);
            };
        }
    }, [lastScrollY, hamburgerActive]);

    const handleClick = () => {
        setActive(!hamburgerActive)
    }

    return (
        <nav className={`nav ${show ? '' : 'hidden'}`}>
            <p className={'name'}>Eugene Suhanov</p>
            <div className={`navLinks ${hamburgerActive ? 'navLinksActive' : ''}`}>
                <Link href="/">
                    <a className={'navLinks_home'} onClick={handleClick}>Home</a>
                </Link>
                <Link href="/about">
                    <a className={'navLinks_about'} onClick={handleClick}>About</a>
                </Link>
                <Link href="/contact">
                    <a className={'navLinks_contact'} onClick={handleClick}>Contact</a>
                </Link>
                <a className={'navLinks_inst'}>
                    <AiOutlineInstagram className={'inst'}/>
                </a>
            </div>
            <div className={`hamburger ${hamburgerActive ? 'hamburgerActive' : ''}`}
                 onClick={handleClick}
            >
                <span className={'hamburger_line'}/>
                <span className={'hamburger_line'}/>
                <span className={'hamburger_line'}/>
            </div>
        </nav>
    )
}

export default Nav