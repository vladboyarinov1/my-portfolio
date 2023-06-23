import React from 'react';
import s from './Contacts.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Element} from 'react-scroll';

export const Contacts = () => {
    return (
        <Element name={'contacts'} className={s.contactsBlock} id={'contacts'}>
            <h3 className={s.title}>Contact Me</h3>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>

                <div className={s.formAndContacts}>
                    <div>
                        <form className={s.form}>
                            <div className={s.nameFormBlock}>
                                <div>
                                    <div className={s.firstName}>
                                        <label className="" htmlFor="fname">First name</label>
                                        <input type="text" className="form-control" id="fname"/>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label className="">Last name</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className={s.emailFormBlock}>
                                <label className="" htmlFor="email">Email address</label>
                                <input type="email"/>
                            </div>
                            <div className={s.messageFormBlock}>
                                <label className="">Message</label>
                                <textarea className={s.messageInput} id="message" cols={30} rows={5}></textarea>
                            </div>
                            <button type="submit" className={s.button}>Send Message</button>
                        </form>
                    </div>
                    <div className={s.contactsInfoBlock}>
                        <h3 className={s.contactsTitle}>Contacts Info</h3>
                        <ul>
                            <li><a href=""><span
                                className={s.address}></span><span className={s.addressText}>Belarus, Minsk</span></a>
                            </li>

                            <li><a href="tel:+375298336185"><span
                                className={s.phone}></span><span>+375298336185</span></a>
                            </li>

                            <li><a href="mailto:boyarinov.2002@bk.ru"><span
                                className={s.email}></span><span>boyarinov.2002@bk.ru</span></a>
                            </li>

                            <li><a href="https://t.me/boyarinov_1"><span
                                className={s.telegram}></span><span>https://github.com/vladboyarinov1</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Element>
    );
};

