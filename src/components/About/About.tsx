import React, {FC, useEffect} from 'react';
import s from './About.module.scss'
import {Element, Link} from 'react-scroll';
import styleContainer from '../../common/styles/Container.module.css'
import photo from '../../img/bg2.jpg'
import {Skills} from './Skills/Skills';
import {Experience} from './Experience/Experience';
import {NavLink, Route, Routes, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {Education} from './Education/Education';
// @ts-ignore
import {Fade} from 'react-reveal';

type PropsType = {
    isDark: boolean
}

export const About: FC<PropsType> = ({isDark}) => {
    const downloadCV = () => {
        const url = 'https://drive.google.com/file/d/10qbkQRrvRtyeuKRplHFtsGaCzDEGHaAF/view?usp=sharing';
        window.open(url, '_blank');
    }
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/skills');
    }, []);

    return (
        <Element name={'about'} id="about">
            <main className={s.main}>
                <div className={styleContainer.container}>
                    <Fade left>
                        <div className={s.imgBlock}>
                            <img src={photo} alt=""/>
                        </div>
                    </Fade>
                    <div className={s.bioBlock}>
                        <Fade right>
                            <div className={s.textBlock}>
                                <h2>My Bio</h2>
                                <p>Hello and welcome to my portfolio website! My name is Vlad and I am a student at the
                                    Belarusian National Technical University, where I am studying "Software for
                                    Information
                                    Technologies". I am also taking courses at IT-INCUBATOR to deepen my knowledge in
                                    software development.</p>
                                <p className={s.bioText}>My main area of focus in development is Frontend. I am
                                    confident in
                                    my knowledge of the modern technology stack, and I am ready to apply it to solve
                                    even
                                    the most complex tasks. My modern technology stack includes HTML, CSS, JavaScript,
                                    TypeScript, React, Redux-Saga, Formik, React-Query, Apollo GraphQL, Material UI, and
                                    Storybook. I also have experience working with React Native and REST API.
                                </p>
                                <p>Furthermore, I am a highly skilled athlete and have the title of Master of Sports of
                                    Belarus in Cross-Country Skiing. My sports career required the highest level of
                                    dedication. These valuable skills that I developed in sports also help
                                    me in working on software projects and achieving success in my professional
                                    endeavors.</p>
                            </div>
                        </Fade>

                        <Fade right>
                            <div className={s.menu}>
                                <NavWrapper isDark={isDark}><NavLink to="/skills"><p>Skills</p>
                                </NavLink></NavWrapper>
                                <NavWrapper isDark={isDark}><NavLink to="/experience"><p>Experience</p>
                                </NavLink></NavWrapper>
                                <NavWrapper isDark={isDark}><NavLink to="/education"><p>Education</p>
                                </NavLink></NavWrapper>
                            </div>

                            <Routes>
                                <Route path="/skills"
                                       element={<Skills/>}/>
                                <Route path="/experience"
                                       element={<Experience/>}/>
                                <Route path="/education"
                                       element={<Education/>}/>
                            </Routes></Fade>
                        <Fade right>
                            <div className={s.buttonsBlock}>
                                <Link spy={true} smooth={true} offset={-70} duration={500} to="contacts"
                                      className={s.hire}>HIRE
                                    ME</Link>
                                <button className={s.download} onClick={downloadCV}>DOWNLOAD
                                    CV
                                </button>
                            </div>
                        </Fade>
                    </div>

                </div>
            </main>
        </Element>
    );
};

const NavWrapper = styled.div<{ isDark: boolean }>`
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
    color: ${props => props.isDark ? 'white' : 'black'};
    text-decoration: none;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    font-weight: 600;
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
