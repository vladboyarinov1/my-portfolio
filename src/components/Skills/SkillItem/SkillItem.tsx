import React from 'react';
import s from './SkillItem.module.css'

export const SkillItem = () => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3 className={s.title}>Title</h3>
            <span className={s.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda distinctio mollitia saepe sit.</span>
        </div>
    );
};
