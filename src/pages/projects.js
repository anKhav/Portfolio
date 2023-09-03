import React from 'react';
import Layout from "../components/layout/layout";
import Project from "../components/project/Project";
import {projectsData} from '../data/projects.js'
import {projects} from '../assets/styles/projects.module.scss'

const Projects = () => {
    return (
        <Layout pageTitle="Projects">
            <div className={projects}>
                {
                    projectsData.map(project => {
                        return <Project
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            siteUrl={project.siteUrl}
                            repoUrl={project.repoUrl}
                        />
                    })
                }
            </div>
        </Layout>
    );
};

export default Projects;

export const Head = () => <title>Projects Page</title>