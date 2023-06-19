import React, {useEffect, useState} from 'react';
import s from './Header.module.css'
import styled from 'styled-components';
import {Element, Link} from 'react-scroll';
import useScrollPosition from '../../hooks/useScrollPosition';
import {useWindowSize} from '../../hooks/useWindowSize';
import burger from '../../img/icons/burger.svg'
import {Sidebar} from './Sidebar/Sidebar';


export const Header = () => {
    const scrollPosition = useScrollPosition();
    const {width, height} = useWindowSize()

    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)
    useEffect(() => {
        open && (document.body.style.overflow = 'hidden')
        !open && (document.body.style.overflow = 'unset')
    }, [open]) // отключает прокрутку при открытом меню

    console.log(open)


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
                            <LinkWrapper fixedHeader={fixedHeader} spy={true} smooth={true} offset={-70} duration={500}
                                         to="/">Home</LinkWrapper>
                            <LinkWrapper fixedHeader={fixedHeader} spy={true} smooth={true} offset={-70} duration={500}
                                         to="about">About</LinkWrapper>
                            <LinkWrapper fixedHeader={fixedHeader} spy={true} smooth={true} offset={-70} duration={500}
                                         to="skills">Skills</LinkWrapper>
                            <LinkWrapper fixedHeader={fixedHeader} spy={true} smooth={true} offset={-70} duration={500}
                                         to="projects">Projects</LinkWrapper>
                            <LinkWrapper fixedHeader={fixedHeader} spy={true} smooth={true} offset={-70} duration={500}
                                         to="contacts">Contacts</LinkWrapper>
                        </nav>
                    </header> : <header className={s.burgerHeader}>
                        <div id={'hw5-header'} className={fixedHeader ? s.fixedHeaderBlock : s.headerBlock}>
                            <img
                                src={burger}
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
                        <p>A new work from <a href="#">Colorlib</a></p>
                    </div>
                </div>
            </div>
        </Element>
    );
};


const LinkWrapper = styled(Link)<{ fixedHeader: boolean }>`
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none !important;

  color: ${props => props.fixedHeader ? 'black' : 'rgba(255, 255, 255, 0.5)'};
  position: relative;

  &.active {
    text-decoration: underline;
    color: #96bb7c;
  }

  &:hover {
    color: ${props => props.fixedHeader ? '' : '#fff'};
  }
`;