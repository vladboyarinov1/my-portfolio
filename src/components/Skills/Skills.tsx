import React from 'react';
import s from './Skills.module.css'
import styleContsiner from '../../common/styles/Container.module.css'
import {SkillItem} from './SkillItem/SkillItem';


export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContsiner.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <SkillItem/>
                    <SkillItem/>
                    <SkillItem/>
                </div>
            </div>
        </div>
    );
};