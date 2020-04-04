import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import StartImage from '../components/StartImg'
import styles from '../style/index.module.css'

const IndexPage = (props) => {
  const { t } = useTranslation()

  return (
    <div>
      <SEO title="Home" />
      <h1>{t('home.title')}</h1>
      <div className={styles.container}>
        <div className={styles.intro}>
          <p style={{fontSize: '25px', textAlign: 'center'}}>
          {t('home.content')}
          </p>
        </div>
        <div className={styles.hotChocolate}>
        <StartImage  />
        </div>
      </div>
    </div>
  )
}

export default IndexPage
