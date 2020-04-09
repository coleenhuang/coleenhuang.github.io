import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import { useTranslation } from "react-i18next"
import SEO from "../components/seo"
import ContactLink from "../components/ContactLinks"

const ContactPage = (props) => {
  const { t } = useTranslation()
  return(
    <div>
      <SEO title="Contact" />
      <h1 style={{textAlign: "center"}}>{t('contact.title')}</h1>
      <div style={{maxWidth:'300px', margin:'0 auto 15px'}}>
        <Img fluid={props.data.profile.childImageSharp.fluid} />
      </div>
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

export const pageQuery = graphql`
  query {
    profile: file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
