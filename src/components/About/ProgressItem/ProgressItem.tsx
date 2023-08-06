import React, { FC, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import s from './ProgressItem.module.css';
// @ts-ignore
import {Fade} from 'react-reveal';

interface ProgressType {
    title: string;
    value: number;
}

export const ProgressItem: FC<ProgressType> = ({ title, value }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    const [progress, setProgress] = useState(0);
    const [showItem, setShowItem] = useState(false);

    useEffect(() => {
        if (inView) {
            setShowItem(true);
            let currentProgress = 0;
            const increment = Math.ceil(value / 100); // Увеличение прогресса на каждом шаге
            const interval = setInterval(() => {
                currentProgress += increment;
                setProgress(currentProgress);
                if (currentProgress >= value) {
                    clearInterval(interval); // Остановка анимации, когда достигнуто значение прогресса
                }
            }, 10); // Интервал обновления прогресса в миллисекундах

            return () => clearInterval(interval);
        }
    }, [inView, value]);

    return (
        <Fade>
            <div ref={ref} className={showItem ? s.wrapper : s.hidden}>
                <div className={s.title}>{title}</div>
                <div className={s.progressBlock}>
                    <progress className={s.progress} value={progress} max={100} />
                    <span>{progress}%</span>
                </div>
            </div>
        </Fade>
    );
};