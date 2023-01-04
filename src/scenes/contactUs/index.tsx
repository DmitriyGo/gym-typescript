import React, { FC, useCallback } from 'react';
import { SelectedPage } from '@/shared/types';
import {
    ErrorMessage,
    Field,
    Form,
    Formik,
    FormikHelpers,
    FormikValues,
} from 'formik';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';
import { motion } from 'framer-motion';
import SlideAnimation from '@/shared/SlideAnimation';
import HText from '@/shared/HText';
import * as Yup from 'yup';

interface ContactUsProps {
    setSelectedPage: (value: SelectedPage) => void;
}

type Props = ContactUsProps;
const ContactUs: FC<Props> = ({ setSelectedPage }) => {
    const inputStyles = `my-2 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

    const onFormikSubmit = useCallback(
        (
            values: FormikValues,
            formikHelpers: FormikHelpers<typeof initialValues>,
        ) => {
            fetch('https://formsubmit.co/dm.gorbat@gmail.com', {
                method: 'POST',
            }).then(() => {
                formikHelpers.resetForm();
                alert('Message has sent');
            });
        },
        [],
    );

    const initialValues = {
        name: '',
        email: '',
        message: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().required('Required').email('Invalid email address'),
        message: Yup.string().required('Required'),
    });

    return (
        <section id='contactus' className='mx-auto w-5/6 pt-24 mb-32'>
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
            >
                {/*  HEADER  */}
                <SlideAnimation className='md:w-3/5'>
                    <HText>
                        <span className='text-primary-500'>JOIN NOW</span> TO
                        GET IN SHAPE
                    </HText>
                    <p className='my-5'>
                        Congue adipiscing risus commodo placerat. Tellus et in
                        feugiat nisl sapien vel rhoncus. Pl acerat at in enim
                        pellentesque. Nulla adipiscing leo egestas nisi elit
                        risusl Sit. Nunc cursus sagittis,
                    </p>
                </SlideAnimation>

                {/*  FORM AND IMAGE  */}
                <div className='mb-10 justify-between gap-8 md:flex'>
                    <SlideAnimation vertical className='my-5 basis-3/5 md:mt-0'>
                        <Formik
                            onSubmit={onFormikSubmit}
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                        >
                            <Form>
                                <Field
                                    className={inputStyles}
                                    id='name'
                                    name='name'
                                    placeholder='Name'
                                />
                                <ErrorMessage
                                    component='div'
                                    className='text-primary-500'
                                    name={'name'}
                                />
                                <Field
                                    className={inputStyles}
                                    id='email'
                                    name='email'
                                    placeholder='Email'
                                />
                                <ErrorMessage
                                    component='div'
                                    className='text-primary-500'
                                    name={'email'}
                                />
                                <Field
                                    className={`${inputStyles} resize-none`}
                                    id='message'
                                    name='message'
                                    placeholder='Message'
                                    component='textarea'
                                    rows={4}
                                    cols={50}
                                />
                                <ErrorMessage
                                    component='div'
                                    className='text-primary-500'
                                    name='message'
                                />
                                <button
                                    className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
                                    type='submit'
                                >
                                    SUBMIT
                                </button>
                            </Form>
                        </Formik>
                    </SlideAnimation>
                    <SlideAnimation vertical
                        className="relative mt-16 basis-2/5 md:mt-0"
                    >
                        <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
                            <img
                                className="w-full"
                                alt="contact-us-page-graphic"
                                src={ContactUsPageGraphic}
                            />
                        </div>
                    </SlideAnimation>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactUs;
