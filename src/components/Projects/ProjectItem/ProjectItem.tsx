import React from 'react';
import s from './ProjectItem.module.css'

export const ProjectItem = () => {
    return (
        <div className={s.project}>
            <div className={s.imgContainer}>
                <a href="" className={s.button}>View</a>
            </div>
            <div className={s.text}>
                <h2 className={s.title}>Project Tile</h2>
                <span className={s.description}>Project description</span>
            </div>
        </div>
    );
};