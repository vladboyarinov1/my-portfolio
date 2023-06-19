import React, {FC} from 'react';
import s from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {SkillItem} from './SkillItem/SkillItem';
import {Element} from 'react-scroll';


export const Skills: FC = () => {
    return (
        <Element name={'skills'} className={s.skillsBlock} id={'skills'}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <SkillItem/>
                    <SkillItem/>
                    <SkillItem/>
                </div>
            </div>
        </Element>
    );
};