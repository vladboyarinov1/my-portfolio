import React from 'react';
import s from './Header.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={`${styleContainer.container} ${s.headerContainer}`}>
                <nav>
                    <a href="">Home</a>
                    <a href="">Skills</a>
                    <a href="">Projects</a>
                    <a href="">Contacts</a>
                </nav>
            </div>
        </header>
    );
};
