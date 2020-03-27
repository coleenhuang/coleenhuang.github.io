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
      <div class="email">
        <a href='mailto:coleenhuang@gmail.com'>coleenhuang@gmail.com</a>
      </div>
      <div class="github">
        <a href="https://github.com/coleenhuang">Github</a>
      </div>
      <div class="linkedin">
        <a href="https://www.linkedin.com/in/coleen-huang-95896b185/">LinkedIn</a>
      </div>
    </div>
  )
}

export default ContactPage
