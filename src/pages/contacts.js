import React from 'react';
import Layout from "../components/layout/layout";
import Telegram from "../components/icons/telegram";
import Linkedin from "../components/icons/linkedin";
import Github from "../components/icons/github";
import {
    link,
    socials,
    title,
    email
} from '../assets/styles/contacts.module.scss'

const Contacts = () => {
    return (
        <Layout pageTitle="Contacts">
            <h2 className={title}>Let's get in touch</h2>
            <a className={email} href="mailto:khavaldzhi.a@gmail.com">khavaldzhi.a@gmail.com</a>
            <ul className={socials}>
                <li className={link}>
                    <a
                        href="https://t.me/an_khav"
                        target="_blank"
                        aria-label="Telegram"
                    >
                        <Telegram />
                    </a>
                </li>
                <li className={link}>
                    <a
                        href="https://www.linkedin.com/in/anton-khavaldzhi-17a83725a/"
                        target="_blank"
                        aria-label="Linkedin"
                    >
                        <Linkedin />
                    </a>
                </li>
                <li className={link}>
                    <a
                        href="https://github.com/anKhav"
                        target="_blank"
                        aria-label="Github"
                    >
                        <Github />
                    </a>
                </li>
            </ul>
        </Layout>
    );
};

export default Contacts;

export const Head = () => <title>Contacts Page</title>