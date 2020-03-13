import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from "../components/seo"

const ContactPage = (props) => {
  const { t } = useTranslation()
  return(
    <div>
      <SEO title="Contact" />
      <h1>{t('contact.title')}</h1>
    </div>
  )
}

export default ContactPage
