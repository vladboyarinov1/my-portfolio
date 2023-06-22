import React, {FC} from 'react';
import {Box, LinearProgress, Typography} from '@mui/material';
import s from './ProgressItem.module.scss'

type ProgressType = {
    id: number
    title: string
    value: number
}

export const ProgressItem: FC<ProgressType> = ({title, value}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>{title}</div>
            <div className={s.progressBlock}>
                <progress className={s.progress} value={value} max={100}/>
                <span>{value}%</span>
            </div>
        </div>
    );

};
