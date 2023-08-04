import React from 'react';
import s from './Contacts.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Element} from 'react-scroll';
import {SendForm} from './SendForm/SendForm';

export const Contacts = () => {
    return (
        <Element name={'contacts'} className={s.contactsBlock} id={'contacts'}>
            <h3 className={s.title}>Contact Me</h3>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <div className={s.formAndContacts}>
                 <SendForm/>
                    <div className={s.contactsInfoBlock}>
                        <h3 className={s.contactsTitle}>Contacts Info</h3>
                        <ul>
                            <li><a href=""><span
                                className={s.address}></span><span className={s.addressText}>Belarus, Minsk</span></a>
                            </li>

                            <li><a href="tel:+375298336185" target='_blank'><span
                                className={s.phone}></span><span>+375298336185</span></a>
                            </li>

                            <li><a href="mailto:boyarinov.2002@bk.ru" target='_blank'><span
                                className={s.email}></span><span>boyarinov.2002@bk.ru</span></a>
                            </li>

                            <li><a href="https://t.me/boyarinov_1" target='_blank'><span
                                className={s.telegram}></span><span>@boyarinov_1</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Element>
    );
};

