import React from 'react';
import s from './Contacts.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h3 className={s.title}>Contacts</h3>
                <form className={s.formContainer}>
                    <label htmlFor="name">Имя:</label>
                    <input type="text" id="name" name="name" required/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required/>

                    <label htmlFor="message">Сообщение:</label>
                    <textarea id="message" name="message" rows={5} required></textarea>

                    <button className={s.button} type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
};