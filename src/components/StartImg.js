import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StartImage = (props) => {
  const data = useStaticQuery(graphql`
    query {
      hotChocolate: file(relativePath: { eq: "hot-chocolate.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
      <Img
      fluid={data.hotChocolate.childImageSharp.fluid} />

)}

export default StartImage
