import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from './StartImg.module.css'

const StartImage = (props) => {
  const data = useStaticQuery(graphql`
    query {
      hotChocolate: file(relativePath: { eq: "hot-chocolate.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      profile: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
  <div className={styles.gridContainer}>
    <div className={styles.images, styles.chocolate}>
      <Img fluid={data.hotChocolate.childImageSharp.fluid} />
    </div>
    <div className={styles.images, styles.book}>
      <Img fluid={data.profile.childImageSharp.fluid} />
    </div>
  </div>
)
}

export default StartImage
