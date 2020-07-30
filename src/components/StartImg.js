import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StartImage = (props) => {
  const data = useStaticQuery(graphql`
    query {
      cupoftea: file(relativePath: { eq: "cupoftea.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
      <Img
      fluid={data.cupoftea.childImageSharp.fluid} alt='A cup of tea'/>

)}

export default StartImage
