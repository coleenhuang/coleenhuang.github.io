import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import StartImage from '../components/StartImg'
import styles from '../style/index.module.css'
import Layout from "../components/layout"

const IndexPage = (props) => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{t('home.title')}</h1>
      <div className={styles.container}>
        <div className={styles.intro}>
          <p>
          {t('home.content')}
          </p>
        </div>
        <div className={styles.cupoftea}>
        <StartImage  />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
