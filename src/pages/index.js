
import React from "react";
import '../assets/styles/normilize.css'
import Layout from "../components/layout/layout";
import Telegram from "../components/icons/telegram";

import {
    title,
    socials,
    link,
    content,
    subtitle,
    stack,
    knowledge,
    list_item,
    about,
    img,
    img__wrapper
} from "../assets/styles/about.module.scss";
import Linkedin from "../components/icons/linkedin";
import Github from "../components/icons/github";

const About = () => {
    return (
        <Layout pageTitle="About me">
            <div className={content}>
                <h2 className={title}>Hello, My name is Anton</h2>
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
                <div className={img__wrapper}><div className={img}></div></div>
                <p className={about}>
                    I am a skilled JavaScript developer. Highly passionate in creating
                    fully responsible web application according UI/UX templates. Using
                    newest technologies. Hard skilled in resolving problems, finding the
                    information form different sources. Gladly learning new technologies
                    and libraries, tools and patterns.
                </p>
                <ul className={stack}>
                    <h3 className={subtitle}>My tech stack</h3>
                    <li className={list_item}>JavaScript (ES6+)</li>
                    <li className={list_item}>Typescript</li>
                    <li className={list_item}>React</li>
                    <li className={list_item}>Redux / reduxtoolkit</li>
                    <li className={list_item}>Scss</li>
                    <li className={list_item}>Css modules</li>
                </ul>
                <ul className={knowledge}>
                    <h3 className={subtitle}>Knowledge and tools</h3>
                    <li className={list_item}>Basic configuration Webpack + Babel</li>
                    <li className={list_item}>Prettier</li>
                    <li className={list_item}>ESLint</li>
                    <li className={list_item}>Express.js</li>
                    <li className={list_item}>Sequelize</li>
                    <li className={list_item}>JWT-based authentication</li>
                    <li className={list_item}>Git</li>
                    <li className={list_item}>GitLab</li>
                    <li className={list_item}>Postman</li>
                    <li className={list_item}>Webstorm</li>
                    <li className={list_item}>React/Redux devtools and React Profiler</li>
                </ul>
            </div>
        </Layout>
    );
};

export default About;

export const Head = () => <title>About Page</title>;

