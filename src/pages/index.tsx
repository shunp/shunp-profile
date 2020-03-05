import React from "react"
import Header from '../components/header'
import Hero from '../views/Hero'
import Container from '@material-ui/core/Container'
import { Toolbar, Link } from "@material-ui/core"
import TechCategories from '../views/TechCategories'
import AppAppBar from "../views/AppAppBar"
import { graphql } from "gatsby"

const styles = theme => ({
})


export default ({ data }) => (
    <>
        {/* <Header /> */}
        <AppAppBar />
        <Hero />
        <TechCategories url={data} />
        {/* <Container maxWidth="md">
            <TopCard title="Processing" explain="AAA" to="/processing" />
            <TopCard title="CV" explain="BBB" to="/cv" />
            <TopCard title="Landing" explain="CCC" to="/landing" />
        </Container> */}
    </>
)

export const query = graphql`
  query {
    blockchain:file(relativePath: { eq: "blockchain.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 500, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    cg:file(relativePath: { eq: "3dcg.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 500, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
    }
    web:file(relativePath: { eq: "web.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 500, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
    }
    ml:file(relativePath: { eq: "ml.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 500, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
    }
    cloud:file(relativePath: { eq: "cloud.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 500, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
    }
    processing:file(relativePath: { eq: "processing.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 500, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
    }
    ar:file(relativePath: { eq: "ar.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 500, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
    }
    document:file(relativePath: { eq: "document.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 500, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
    }
}  
`
