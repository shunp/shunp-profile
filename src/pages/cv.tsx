import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
  <div>
    <h1>Hello gatsby-image</h1>
    <Img fixed={data.file.childImageSharp.fixed} />
    <Img fluid={data.imageOne.childImageSharp.fluid} />
  </div>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "aws.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 250, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    imageOne: file(relativePath: { eq: "virtualworld.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }
  }
`