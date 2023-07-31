import React, {FC} from 'react';
import s from './Projects.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {ProjectItem} from './ProjectItem/ProjectItem';
import {Element} from 'react-scroll';
import todolistImg from '../../img/todolist.jpg'
import socialImg from '../../img/network.jpg'

type PropsType = {
    isDark: boolean
}

const projectsItems = [
    {
        id: 1, title: 'Todo-list', description: 'React,Redux,Storybook',
        projectImg: todolistImg, link: 'https://github.com/vladboyarinov1/todolist'
    },
    {id: 2, title: 'Social Network', description: 'React,Redux,Storybook', projectImg: socialImg, link: ''},
    {id: 3, title: 'Clone Instagram', description: 'React,Redux,Storybook', projectImg: todolistImg, link: ''},

]
const projects = projectsItems.map(i => <ProjectItem key={i.id} link={i.link} id={i.id} title={i.title}
                                                     description={i.description}
                                                     projectImg={i.projectImg}/>)

export const Projects: FC<PropsType> = ({isDark}) => {
    return (
        <Element name={'projects'} className={isDark ? `${s.projectBlock} ${s.prBlockDark}` : `${s.projectBlock}`} id="projects">
            <div className={`${styleContainer.container} ${s.projectContainer}`}>
                <h2 className={s.title}>My project</h2>
                <div className={s.projects}>
                    {projects}
                </div>
            </div>
        </Element>
    );
};
