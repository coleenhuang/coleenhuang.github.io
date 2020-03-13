import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from "../components/seo"

const AboutPage = (props) => {
  const { t } = useTranslation()
  return(
    <div>
      <SEO title="About" />
      <h1>{t('about.title')}</h1>
      <p>about</p>
    </div>
  )
}

export default AboutPage
