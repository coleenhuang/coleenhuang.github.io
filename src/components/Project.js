import React from 'react';
import { useTranslation } from "react-i18next"

const Project = (props) => {
  const { t } = useTranslation();
  return(
    <div>
      <h2>{props.title}</h2>
      <p>Technologies used:{props.tech}</p>
      <p>{props.description}</p>    
    </div>
  )
}

export default Project;
