import React from "react";
import {
  project,
  content,
  titleP,
  descr,
  img__wrapper,
  overlay,
  img,
    button
} from "./Project.module.scss";
const Project = ({title, description, image, siteUrl, repoUrl}) => {
  return (
    <section className={project}>
      <div className={content}>
        <h2 className={titleP}>{title}</h2>
        <p className={descr}>
          {description}
        </p>
      </div>
      <div className={img__wrapper}>
        <div className={overlay}>
          <a href={siteUrl} target="_blank" className={button}>Visit site</a>
          <a href={repoUrl} target='_blank' className={button}>View code</a>
        </div>
        <img className={img} src={image} alt={title} />
      </div>
    </section>
  );
};

export default Project;
