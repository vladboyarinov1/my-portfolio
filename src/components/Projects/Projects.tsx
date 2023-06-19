import React from 'react';
import s from './Projects.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {ProjectItem} from './ProjectItem/ProjectItem';
import {Element} from 'react-scroll';

export const Projects = () => {
    return (
        <Element name={'projects'} className={s.projectBlock} id='projects'>
            <div className={`${styleContainer.container} ${s.projectContainer}`}>
                <h2 className={s.title}>My project</h2>
                <div className={s.projects}>
                    <ProjectItem/>
                    <ProjectItem/>
                </div>
            </div>
        </Element>
    );
};
