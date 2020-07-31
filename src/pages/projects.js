import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from "../components/seo"
import Project from '../components/Project'
import Layout from '../components/layout'

const ProjectPage = (props) => {
  const { t } = useTranslation()
  return(
    <Layout>
      <SEO title="Projects" />
      <h1 style={{textAlign: 'center'}}>{t('projects.title')}</h1>
      {t('projects.projectList').map((project, key) => {
        return(
          <Project
          key={key}
          title={project.title} tech={project.tech}
          description={project.description}
          repo={project.repo_link}
          demo={project.demo_link}
          image={project.img_name}/>
        )
      })}
    </Layout>
  )
}

export default ProjectPage
