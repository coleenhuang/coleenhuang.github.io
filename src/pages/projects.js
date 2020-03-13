import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from "../components/seo"

const ProjectPage = (props) => {
  const { t } = useTranslation()
  return(
    <div>
      <SEO title="Projects" />
      <h1>{t('projects.title')}</h1>
    </div>
  )
}

export default ProjectPage
