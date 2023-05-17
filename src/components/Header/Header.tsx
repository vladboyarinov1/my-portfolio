import React from 'react';
import s from './Header.module.css'

export const Header = () => {
    return (
        <div className={s.header}>
            <nav>
                <a href="">Home</a>
                <a href="">Skills</a>
                <a href="">Projects</a>
                <a href="">Contacts</a>
            </nav>
        </div>
    );
};
