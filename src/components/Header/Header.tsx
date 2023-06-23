import React, {useEffect, useState} from 'react';
import s from './Header.module.css'
import styled from 'styled-components';
import {Element, Link} from 'react-scroll';
import useScrollPosition from '../../hooks/useScrollPosition';
import {useWindowSize} from '../../hooks/useWindowSize';
import burger from '../../img/icons/burger.svg'
import burgerWhite from '../../img/icons/burgerWhite.svg'
import {Sidebar} from './Sidebar/Sidebar';
import {LinkItem} from './LinkWrapper/LinkWrapper';


const linked = [
    {id: 1, title: 'Home', to: 'home'},
    {id: 2, title: 'About', to: 'about'},
    {id: 3, title: 'Projects', to: 'projects'},
    {id: 4, title: 'Contacts', to: 'contacts'},
]

export const Header = () => {
    const scrollPosition = useScrollPosition();
    const {width} = useWindowSize()

    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)
    useEffect(() => {
        open && (document.body.style.overflow = 'hidden')
        !open && (document.body.style.overflow = 'unset')
    }, [open]) // отключает прокрутку при открытом меню

    const widthForBurger = width && width <= 768


    const [scrolled, setScrolled] = useState(0);
    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        setScrolled(scrollTop);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const movingTextStyle = {
        transform: `translateY(-${scrolled * 0.4}px)`
    };

    const fixedHeader = scrollPosition >= 100;
    return (
        <Element name={'/'} className={s.backgroundPhoto} id="home">
            <div className={`${s.headerContainer}`}>
                {
                    !widthForBurger ? <header className={fixedHeader ? s.fixed : s.header}>
                        <nav className={fixedHeader ? s.fixedHeader : s.notFixedHeader}>
                            {
                                linked.map(l => <LinkItem key={l.id} to={l.to} fixedHeader={fixedHeader}
                                                          title={l.title}/>)
                            }
                        </nav>
                    </header> : <header className={s.burgerHeader}>
                        <div id={'hw5-header'} className={fixedHeader ? s.fixedHeaderBlock : s.headerBlock}>
                            <img
                                src={fixedHeader ? burger : burgerWhite}
                                id={'hw5-burger-menu'}
                                className={s.burgerMenuIcon}
                                onClick={handleOpen}
                                alt={'open menu'}
                            />
                            <h1>{''}</h1>
                            <Sidebar width={fixedHeader} open={open} handleClose={handleClose}/>
                        </div>
                    </header>
                }
                <div className={s.welcomeContainer}>
                    <div className={s.welcomeBlock} style={movingTextStyle}>
                        <h1>I'm Vladislav Boiarinov<br/>
                            A Front-end Developer
                        </h1>
                        <p>Link to my <a href="https://github.com/vladboyarinov1" target="_blank">GitHub</a> account</p>
                    </div>
                </div>
            </div>
        </Element>
    );
};
