import React from 'react';
import { useTranslation } from "react-i18next"
import ProjectImg from './ProjectImg.js'
import styles from './Project.module.css'
const Project = (props) => {
  const { t } = useTranslation();
  return(
    <div className={styles.project}>
      <h2 style={{textAlign: 'center'}}>{props.title}</h2>
      <ProjectImg image={props.image} />
      <p>{t("projects.technology")} {props.tech}</p>
      <p>{props.description}</p>
      <div className={styles.projectlinks}>
        <div class="repo">
          <a href={props.repo}>{t("projects.repo")}</a>
        </div>
        <div className="demo">
          <a href={props.demo}>{t("projects.demo")}</a>
        </div>
      </div>
    </div>
  )
}

export default Project;
