import React from 'react';
import { useTranslation } from "react-i18next"
import ProjectImg from './ProjectImg.js'

const Project = (props) => {
  const { t } = useTranslation();
  return(
    <div>
      <h2>{props.title}</h2>
      <ProjectImg image={props.image} />
      <p>Technologies used:{props.tech}</p>
      <p>{props.description}</p>
    </div>
  )
}

export default Project;
