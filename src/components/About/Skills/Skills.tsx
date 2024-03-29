import React, {FC} from 'react';
import s from '../About.module.scss';
import {ProgressItem} from '../ProgressItem/ProgressItem';

const progress = [
    {id: 1, title: 'HTML', value: 90},
    {id: 2, title: 'CSS', value: 90},
    {id: 3, title: 'JS', value: 75},
    {id: 4, title: 'React', value: 80},
    {id: 5, title: 'Storybook', value: 80},
]

export const Skills: FC<any> = () => {
    const progressItem = progress.map(i => <ProgressItem key={i.id}  title={i.title} value={i.value}/>)
    return (
        <div>
            <div className={s.skillLevelBlock}>
                {progressItem}
            </div>
        </div>
    );
};