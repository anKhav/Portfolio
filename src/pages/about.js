import React from 'react';
import Layout from '../components/layout/layout'

const About = () => {
    return (
        <Layout pageTitle="About">
            <p>Hi there! I built this blog with Gatsby.</p>
        </Layout>
    );
};

export default About;

export const Head = () => <title>About Page</title>