import React from 'react';
import s from './About.module.scss'
import {Element, Link} from 'react-scroll';
import styleContainer from '../../common/styles/Container.module.css'
import {ProgressItem} from './ProgressItem/ProgressItem';
import photo from '../../img/bg2.jpg'
import {Skills} from './Skills/Skills';
import {Experience} from './Experience/Experience';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import styled from 'styled-components';
import {Education} from './Education/Education';


const progress = [
    {id: 1, title: 'HTML', value: 90},
    {id: 2, title: 'CSS', value: 80},
    {id: 3, title: 'JS', value: 60},
    {id: 4, title: 'React', value: 75},
    {id: 5, title: 'Storybook', value: 40},
]

export const About = () => {
    const downloadCV = () => {
        const url = 'https://drive.google.com/uc?export=download&id=1H9UlTnDqcKopBQujJe7r0UpocnO94-hG';
        window.open(url, '_blank');
    }
    const progressItem = progress.map(i => <ProgressItem key={i.id} id={i.id} title={i.title} value={i.value}/>)

    return (
        <Element name={'about'} id="about">
            <main className={s.main}>
                <div className={styleContainer.container}>
                    <div className={s.imgBlock}>
                        <img src={photo} alt=""/>
                    </div>
                    <div className={s.bioBlock}>
                        <div className={s.textBlock}>
                            <h2>My Bio</h2>
                            <p>Hi! My name is Vlad and I am studying web development courses and pursuing higher
                                education in information technology. I am interested in developing user interfaces
                                and
                                web applications, and I have gained knowledge in HTML, CSS, JavaScript and React in
                                my
                                courses and at the university. </p>
                            <p className={s.bioText}>I have participated in several projects, including creating a
                                website for selling goods, as well as a portfolio site to demonstrate my skills. I
                                also
                                devote time to self-study and learning new web development technologies. I am ready
                                to
                                implement new projects and improve my skills to become a qualified web development
                                specialist.</p>
                        </div>

                        <div className={s.menu}>
                            <NavWrapper><NavLink to="/skills"><p>Skills</p>
                            </NavLink></NavWrapper>
                            <NavWrapper><NavLink to="/experience"><p>Experience</p>
                            </NavLink></NavWrapper>
                            <NavWrapper><NavLink to="/education"><p>Education</p>
                            </NavLink></NavWrapper>

                        </div>
                        <Routes>
                            <Route path="/skills"
                                   element={<Skills/>}/>
                            <Route path="/experience"
                                   element={<Experience/>}/>
                            <Route path="/education"
                                   element={<Education/>}/>
                        </Routes>
                        <div className={s.buttonsBlock}>
                            <Link spy={true} smooth={true} offset={-70} duration={500} to="contacts"
                                  className={s.hire}>HIRE
                                ME</Link>
                            <button className={s.download} onClick={downloadCV}>DOWNLOAD
                                CV
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </Element>
    );
};

const NavWrapper = styled.div`

  font-size: 18px;
  margin-bottom: 1rem;
  @media only screen and (max-width: 600px) {
  }

  & a.active::after {
    content: '';
    display: block;
    width: 40%;
    height: 2px;
    background-color: #96bb7c;
    position: absolute;
    bottom: 0px;
    left: 0;
  }

  & a {
    position: relative;
    color: black;
    text-decoration: none;
    padding: 10px 14px;
    display: flex;
    align-items: center;
  }

  & a:first-child {
    padding-left: 0;
  }

  & > a.active {
    text-decoration: none;
    color: #96bb7c;
  }

  //& > a:hover {
  //  color: dodgerblue;
  //}
`
