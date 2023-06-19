import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Sidebar.module.css'
import closeIcon from '../../../img/icons/closeOutline.svg'
import styled from 'styled-components';
import {Link} from 'react-scroll';

type PropsType = {
    open: boolean
    width: boolean
    handleClose: () => void
}

export const Sidebar: FC<PropsType> = ({open, handleClose}) => {
    const sidebarClass = s.sidebar
        + (open ? ' ' + s.open : '')

    return (
        <>
            {/*затемнение справа от открытого меню*/}
            {open && <div className={s.background} onClick={handleClose}/>}

            <aside className={sidebarClass}>
                <button className={open ? s.close : s.closeNotOpen} onClick={handleClose}>
                    <img
                        src={closeIcon}
                        alt="close sidebar"
                        id={''}
                    />
                </button>

                <nav id={'hw5-menu'} className={s.nav}>
                    <NavWrapper
                        spy={true} smooth={true} offset={-70} duration={500}
                        id={''}
                        to={'/'}
                        onClick={handleClose}
                    >
                        Home
                    </NavWrapper>
                    <NavWrapper
                        spy={true} smooth={true} offset={-70} duration={500}
                        id={''}
                        to={'about'}
                        onClick={handleClose}
                    >
                        About
                    </NavWrapper>
                    <NavWrapper
                        spy={true} smooth={true} offset={-70} duration={500}
                        id={''}
                        to={'projects'}
                        onClick={handleClose}
                    >
                        Projects
                    </NavWrapper>
                    <NavWrapper
                        spy={true} smooth={true} offset={-70} duration={500}
                        id={''}
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

// const NavWrapper = styled.div`
//   margin-bottom: 20px;
//
//   & > a {
//     text-decoration: none;
//     color: #000000;
//     font-weight: 600;
//     font-size: 22px;
//   }
//
//   & > a.active {
//     text-decoration: underline;
//     color: #0059B2;
//   }
//
//   & > a:hover {
//     color: #58ACFF;
//   }
//
// `
const NavWrapper = styled(Link)`
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  margin-bottom: 25px;
  position: relative;
  color: #000000;

  &.active {
    color: #96bb7c;
  }
`;