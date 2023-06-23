import React from 'react';
import s from './Projects.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {ProjectItem} from './ProjectItem/ProjectItem';
import {Element} from 'react-scroll';
import todolistImg from '../../img/todolist.jpg'
import socialImg from '../../img/network.jpg'

const projectsItems = [
    {
        id: 1,
        text: 'Stack',
        title: 'Todo-list',
        description: 'React,Redux,Storybook',
        projectImg: todolistImg,
        link: 'https://github.com/vladboyarinov1/todolist'
    },
    {id: 2, text: '', title: 'Social Network', description: '', projectImg: socialImg, link: ''},
    {id: 3, text: '', title: 'Clone Instagram', description: '', projectImg: '', link: ''},
]

export const Projects = () => {
    return (
        <Element name={'projects'} className={s.projectBlock} id="projects">
            <div className={`${styleContainer.container} ${s.projectContainer}`}>
                <h2 className={s.title}>My project</h2>
                <div className={s.projects}>
                    {
                        projectsItems.map(i => <ProjectItem key={i.id} link={i.link} id={i.id} title={i.title}
                                                            description={i.description}
                                                            text={i.text} projectImg={i.projectImg}/>)
                    }
                </div>
            </div>
        </Element>
    );
};
