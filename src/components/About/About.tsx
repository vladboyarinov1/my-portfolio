import React from 'react';
import s from './About.module.css'
import {Element} from 'react-scroll';
import styleContainer from '../../common/styles/Container.module.css'
import {ProgressItem} from './ProgressItem/ProgressItem';


const progress = [
    {id: 1, title: 'HTML', value: 90},
    {id: 2, title: 'CSS', value: 80},
    {id: 3, title: 'JS', value: 60},
    {id: 4, title: 'React', value: 75},
    {id: 5, title: 'Storybook', value: 40},
]

export const About = () => {
    const downloadCV = () => {
        const url = 'https://drive.google.com/uc?export=download&id=1H9UlTnDqcKopBQujJe7r0UpocnO94-hG';
        window.open(url, '_blank');
    }

    return (
        <Element name={'about'} id="about">
            <main className={s.main}>
                <div className={styleContainer.container}>
                    <div className={s.imgBlock}>
                        <img src="https://pbs.twimg.com/media/DcT2RhEU8AIFvXu?format=jpg&name=4096x4096" alt=""/>
                    </div>
                    <div className={s.bioBlock}>
                        <div className={s.textBlock}>
                            <h2>My bio</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                the Semantics, a large language ocean.</p>
                            <p className={s.bioText}>A small river named Duden flows by their place and supplies it with
                                the necessary
                                regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
                                your mouth.</p>
                        </div>
                        <div className={s.skillLevelBlock}>
                            {/*<ProgressItem id={1} value={60} title={'React'}/>*/}
                            {
                                progress.map(i => {
                                    return (
                                        <ProgressItem key={i.id} id={i.id} title={i.title} value={i.value}/>
                                    )
                                })
                            }
                        </div>
                        <div className={s.buttonsBlock}>
                            <button className={s.hire}>HIRE ME</button>
                            <button className={s.download} onClick={downloadCV}>DOWNLOAD
                                CV
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </Element>

    );
};
