import React from 'react';
import styleContainer from '../../common/styles/Container.module.css'
import s from './Footer.module.css'
import inst from '../../img/icons/instagram.svg'
import facebook from '../../img/icons/facebook.svg'
import telegram from '../../img/icons/telegram.svg'
import linkedIn from '../../img/icons/linkedIn.svg'


export const Footer = () => {
    return (
        <footer className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <p>Vladislav Boiarinov</p>
                <div className={s.socialIcons}>
                    <a href="https://www.instagram.com/your_profile" target="_blank">
                        <img src={inst} alt="Instagram"/>
                    </a>
                    <a href="https://www.twitter.com/your_profile" target="_blank">
                        <img src={telegram} alt="Twitter"/>
                    </a>
                    <a href="https://www.linkedin.com/your_profile" target="_blank">
                        <img src={linkedIn} alt="LinkedIn"/>
                    </a>
                    <a href="https://www.facebook.com/your_profile" target="_blank">
                        <img src={facebook} alt="Facebook"/>
                    </a>
                </div>
                <p className={s.copyright}>© 2023 Все права защищены</p>
            </div>
        </footer>
    );
};


