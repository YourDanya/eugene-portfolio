import React, {useEffect, useState,} from 'react'
import {AiOutlineInstagram} from "react-icons/ai";
import Link from "next/link";
import {useRef} from 'react'

const Nav: React.FC = () => {

    const [show, setShow] = useState(true)
    const [hamburgerActive, setActive] = useState(false)
    const lastScrollYRef = useRef(0)

    const handleNav = () => {
        if (!hamburgerActive) {
            if (window.scrollY > lastScrollYRef.current && show) {
                setShow(false);
            } else if (window.scrollY <= lastScrollYRef.current && !show){
                setShow(true);
            }
            lastScrollYRef.current = window.scrollY
        }
    }

    useEffect(() => {

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleNav);

            return () => {
                window.removeEventListener('scroll', handleNav);
            };
        }
    }, [show, hamburgerActive]);

    const handleClick = () => {
        setActive(!hamburgerActive)
    }

    return (
        <nav className={`nav ${show ? '' : 'hidden'}
            ${hamburgerActive? 'active' : '' }
        `}>
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