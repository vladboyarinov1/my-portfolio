import React from 'react';
import s from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {Element} from 'react-scroll';

export const About = () => {
    return (
        <Element name={'about'} id='about'>
            <main className={s.main}>
                <div className={`${styleContainer.container} ${s.mainContainer}`}>
                    <div className={s.welcomeText}>
                        <span>Welcome text</span>
                        <h1>Vladislav Boiarinov</h1>
                        <p>Frontend Developer</p>
                    </div>
                    <div className={s.photo}></div>

                </div>
            </main>
        </Element>

    );
};