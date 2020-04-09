import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from "../components/seo"

const AboutPage = (props) => {
  const { t } = useTranslation()
  return(
    <div>
      <SEO title="About" />
      <h1 style={{textAlign:'center'}}>{t('about.title')}</h1>
      {t("about.content").split('\n').map((paragraph, key) =>
      <p key={key}>{paragraph}</p>
    )}
    </div>
  )
}

export default AboutPage
