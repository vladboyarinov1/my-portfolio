import React, {FC, useEffect, useState} from 'react';
import s from './Header.module.scss'
import styled from 'styled-components';
import {Element, Link} from 'react-scroll';
import useScrollPosition from '../../hooks/useScrollPosition';
import {useWindowSize} from '../../hooks/useWindowSize';
import burger from '../../img/icons/burger.svg'
import burgerWhite from '../../img/icons/burgerWhite.svg'
import {Sidebar} from './Sidebar/Sidebar';
import {LinkItem} from './LinkWrapper/LinkWrapper';
import bg from '../../img/bg.jpg'
import bg2 from '../../img/bgMob.jpg'
import {SwitchTheme} from '../../common/components/SwitchTheme/SwitchTheme';
import ReactTypingEffect from 'react-typing-effect';
// @ts-ignore
import {Fade} from 'react-reveal';
// @ts-ignore
// import Pulse from 'react-reveal/Pulse';


type PropsType = {
    setDarkMode: (value: boolean) => void
    isDark: boolean
}

const linked = [
    {id: 1, title: 'Home', to: 'home'},
    {id: 2, title: 'About', to: 'about'},
    {id: 3, title: 'Projects', to: 'projects'},
    {id: 4, title: 'Contacts', to: 'contacts'},
]

export const Header: FC<PropsType> = ({setDarkMode, isDark}) => {
    const scrollPosition = useScrollPosition();
    const {width} = useWindowSize()
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(0);

    const widthForBurger = width && width <= 768
    const fixedHeader = scrollPosition >= 100;

    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

    useEffect(() => {
        open && (document.body.style.overflow = 'hidden')
        !open && (document.body.style.overflow = 'unset')
    }, [open]) // отключает прокрутку при открытом меню

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        setScrolled(scrollTop);
    };
    const movingTextStyle = {
        transform: `translateY(-${scrolled * 0.4}px)`
    };
    const linkItem = linked.map(l => <LinkItem isDark={isDark} key={l.id} to={l.to} fixedHeader={fixedHeader}
                                               title={l.title}/>)

    const headerClassName = fixedHeader ? (isDark ? `${s.fixedHeaderBlock} ${s.fixedHeaderDark}` : s.fixedHeaderBlock) : s.headerBlock;
    return (
        <Element name={'/'} className={s.backgroundPhoto}
                 style={{backgroundImage: `url(${width && width > 640 ? bg : bg2})`}} id="home">
            <div className={`${s.headerContainer}`}>
                {!widthForBurger ?
                    <header className={fixedHeader ? s.fixed : s.header}
                            style={isDark ? {backgroundColor: '#212020'} : {backgroundColor: 'white'}}>
                        <nav>
                            {linkItem}
                            {fixedHeader ? <SwitchTheme setDarkMode={setDarkMode} isDark={isDark}/> : ''}
                        </nav>

                    </header>
                    : <header className={s.burgerHeader}>
                        <div className={headerClassName}>
                            {fixedHeader ? <SwitchTheme setDarkMode={setDarkMode} isDark={isDark}/> : ''}
                            <img
                                src={fixedHeader ? (isDark ? burgerWhite : burger) : burgerWhite}
                                className={s.burgerMenuIcon}
                                onClick={handleOpen}
                                alt={'open menu'}
                            />
                            <Sidebar isDark={isDark} width={fixedHeader} open={open} handleClose={handleClose}/>
                        </div>
                    </header>
                }
                <Fade left>
                    <div className={s.welcomeContainer}>
                        <div className={s.welcomeBlock} style={movingTextStyle}>
                            <h1>I'm Vladislav Boiarinov<br/>
                                A Front-end Developer
                            </h1>
                            <p>Link to my <a href="https://github.com/vladboyarinov1" target="_blank">GitHub</a> account
                            </p>
                        </div>
                    </div>
                </Fade>
            </div>
        </Element>
    );
};
