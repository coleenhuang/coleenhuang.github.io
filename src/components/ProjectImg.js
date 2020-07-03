import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProjectImg = (props) => {
  const data = useStaticQuery(graphql`
  {
    allFile(filter: {relativeDirectory: {eq: "projects"}
    }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }`)
  const img = data.allFile.edges.find(
    ({ node }) => node.relativePath === props.image
  ).node
  return(
    <div style={{maxWidth: '350px', margin:'0 auto', display: 'block'}}>
      <Img fluid={img.childImageSharp.fluid} />
    </div>
  )
}

export default ProjectImg
