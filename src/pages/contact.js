import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from "../components/seo"
import ContactLink from "../components/ContactLinks"

const ContactPage = (props) => {
  const { t } = useTranslation()
  return(
    <div>
      <SEO title="Contact" />
      <h1 style={{textAlign: "center"}}>{t('contact.title')}</h1>
      <ContactLink link='mailto:coleenhuang@gmail.com'
        text="coleenhuang@gmail.com" />
      <ContactLink link='https://github.com/coleenhuang'
          text="Github" />
      <ContactLink link='https://www.linkedin.com/in/coleen-huang-95896b185/'
          text="LinkedIn" />
    </div>
  )
}

export default ContactPage
