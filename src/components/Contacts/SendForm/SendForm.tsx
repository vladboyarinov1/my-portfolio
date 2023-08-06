import s from '../Contacts.module.scss';
import React, {FC, useEffect, useState} from 'react';
import emailjs from 'emailjs-com';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {CircularProgress} from '@mui/material';
import {boolean} from 'yup';

type PropsType = {
    isDark: boolean
}

const validationSchema = Yup.object({
    firstName: Yup.string().required('Obrequired'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required('Required')
});

export const SendForm: FC<PropsType> = ({isDark}) => {

    const [loading, setLoading] = useState<boolean>(false)

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            sendEmail(values);
            formik.resetForm()
        },
    });

    function sendEmail(values: any) {
        setLoading(true)
        emailjs.send('service_td5ji0v', 'template_qj0hr69', values, 'p8dgwNIDbAO5HVrGU')
            .then(() => {
                formik.setStatus({sent: true});
                setLoading(false)
            });
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            formik.setStatus({sent: false});
        }, 3000);

        return () => clearTimeout(timeout);
    }, [formik.status?.sent]);

    return (
        <div>
            {formik.status?.sent &&
                <p className={s.successMessage}>Форма отправлена!</p>}
            <form className={loading ? s.formIsSending : s.form} onSubmit={formik.handleSubmit}>
                <div className={s.nameFormBlock}>
                    <div>
                        <div className={s.firstName} >
                            <label className="" htmlFor="firstName">First name</label>
                            <input style={{color: isDark ? 'white' : 'black'}} id="firstName" type="text"
                                   className="form-control" {...formik.getFieldProps('firstName')}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="lastName" className="">Last name</label>
                            <input style={{color: isDark ? 'white' : 'black'}} id="lastName" type="text"
                                   className="form-control" {...formik.getFieldProps('lastName')}/>
                        </div>
                    </div>
                </div>
                <div className={s.emailFormBlock}>
                    <label className="" htmlFor="email">Email address</label>
                    <input style={{color: isDark ? 'white' : 'black'}} id="email" type="email" {...formik.getFieldProps('email')}/>
                </div>
                <div className={s.messageFormBlock}>
                    <label htmlFor="message" className="">Message</label>
                    <textarea style={{color: isDark ? 'white' : 'black'}} className={s.messageInput} id="message" cols={30}
                              rows={5} {...formik.getFieldProps('message')}></textarea>
                </div>
                <button type="submit" className={s.button}>Send Message</button>
                {loading ? <CircularProgress color="success" className={s.progress}/> : ''}
                {loading && <div className={s.overlay}/>}
            </form>
        </div>
    );
}
