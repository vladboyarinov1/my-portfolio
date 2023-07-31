import React, {FC} from 'react'
import s from './Sidebar.module.scss'
import closeIcon from '../../../img/icons/closeOutline.svg'
import closeIconWhite from '../../../img/icons/closeOutlineWhite.svg'
import styled from 'styled-components';
import {Link} from 'react-scroll';

type PropsType = {
    open: boolean
    width: boolean
    handleClose: () => void
    isDark: boolean
}

export const Sidebar: FC<PropsType> = ({open, handleClose, isDark}) => {
    const sidebarClass = s.sidebar
        + (open ? ' ' + s.open : '')

    return (
        <>
            {/*затемнение справа от открытого меню*/}
            {open && <div className={s.background} onClick={handleClose}/>}

            <aside style={isDark ? {backgroundColor: '#3b3b3b'} : {backgroundColor: 'white'}} className={sidebarClass}>
                <button  className={open ? s.close : s.closeNotOpen} onClick={handleClose}>
                    <img
                        src={isDark ? closeIconWhite : closeIcon}
                        alt="close sidebar"
                    />
                </button>

                <nav className={s.nav}>
                    <NavWrapper isDark={isDark}
                        spy={true} smooth={true} offset={-70} duration={500}
                        to={'/'}
                        onClick={handleClose}
                    >
                        Home
                    </NavWrapper>
                    <NavWrapper isDark={isDark}
                        spy={true} smooth={true} offset={-70} duration={500}
                        to={'about'}
                        onClick={handleClose}
                    >
                        About
                    </NavWrapper>
                    <NavWrapper isDark={isDark}
                        spy={true} smooth={true} offset={-70} duration={500}
                        to={'projects'}
                        onClick={handleClose}
                    >
                        Projects
                    </NavWrapper>
                    <NavWrapper isDark={isDark}
                        spy={true} smooth={true} offset={-70} duration={500}
                        to={'contacts'}
                        onClick={handleClose}
                    >
                        Contacts
                    </NavWrapper>
                </nav>
            </aside>
        </>
    )
}

const NavWrapper = styled(Link)<{isDark: boolean}>`
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  margin-bottom: 25px;
  position: relative;
  //color: #000000;
  color: ${props => props.isDark ? 'white' : 'black'};

  &.active {
    color: #96bb7c;
  }
`;