import React, {FC} from 'react';
import styleContainer from '../../common/styles/Container.module.css'
import s from './Footer.module.scss'
import inst from '../../img/icons/instagram.svg'
import instDark from '../../img/icons/instDark.svg'
import telegram from '../../img/icons/telegram.svg'
import linkedIn from '../../img/icons/linkedIn.svg'
import vk from '../../img/icons/vk.svg'
import git from '../../img/icons/git.svg'
// @ts-ignore
import {Slide} from 'react-reveal';

type PropsType = {
    isDark: boolean
}
export const Footer: FC<PropsType> = ({isDark}) => {
    return (
        <footer className={isDark ? `${s.footerBlock}  ${s.footerDark}` : s.footerBlock}>
            <Slide left>
                <div className={`${styleContainer.container} ${s.footerContainer}`}>
                    <p>Vladislav Boiarinov</p>
                    <div className={s.socialIcons}>
                        <a href="https://t.me/boyarinov_1" target="_blank">
                            <img src={telegram} alt="telegram"/>
                        </a>
                        <a href="https://www.linkedin.com/in/vlad-boiarinov-b09317277/" target="_blank">
                            <img src={linkedIn} alt="LinkedIn"/>
                        </a>
                        <a href="https://github.com/vladboyarinov1" target="_blank">
                            <img src={git} alt="git"/>
                        </a>
                        <a href="https://www.instagram.com/vlad.boyara/" target="_blank">
                            <img src={isDark ? instDark : inst} alt="Instagram"/>
                        </a>
                        <a href="https://vk.com/vlad_boyarinov" target="_blank">
                            <img src={vk} alt="VK"/>
                        </a>
                    </div>
                    <p className={s.copyright}>© 2023 All rights reserved</p>
                </div>
            </Slide>
        </footer>
    );
};


