import React from 'react';
import styleContainer from '../../common/styles/Container.module.css'
import s from './Footer.module.css'
import inst from '../../img/icons/instagram.svg'
import telegram from '../../img/icons/telegram.svg'
import linkedIn from '../../img/icons/linkedIn.svg'
import vk from '../../img/icons/vk.svg'
import git from '../../img/icons/git.svg'


export const Footer = () => {
    return (
        <footer className={s.footerBlock}>
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
                        <img src={inst} alt="Instagram"/>
                    </a>
                    <a href="https://vk.com/vlad_boyarinov" target="_blank">
                        <img src={vk} alt="VK"/>
                    </a>
                </div>
                <p className={s.copyright}>© 2023 Все права защищены</p>
            </div>
        </footer>
    );
};


