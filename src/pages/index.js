import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import StartImage from '../components/StartImg'

const IndexPage = (props) => {
  const { t } = useTranslation()

  return (
    <div>
      <SEO title="Home" />
      <h1>{t('home.title')}</h1>
      <p style={{fontSize: '25px', textAlign: 'center'}}>{t('home.content')}</p>
        <StartImage  />
    </div>
  )
}

export default IndexPage
