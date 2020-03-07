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
    <Header />
    <AppAppBar />
    <Hero url={data} />
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
        fixed(width: 500, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    cg:file(relativePath: { eq: "3dcg.png" }) {
        childImageSharp {
          fixed(width: 500, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
    }
    web:file(relativePath: { eq: "web.png" }) {
        childImageSharp {
          fixed(width: 500, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
    }
    ml:file(relativePath: { eq: "ml.png" }) {
        childImageSharp {
          fixed(width: 500, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
    }
    cloud:file(relativePath: { eq: "cloud.png" }) {
        childImageSharp {
          fixed(width: 500, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
    }
    processing:file(relativePath: { eq: "processing.png" }) {
        childImageSharp {
          fixed(width: 500, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
    }
    ar:file(relativePath: { eq: "ar.png" }) {
        childImageSharp {
          fixed(width: 500, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
    }
    document:file(relativePath: { eq: "document.png" }) {
        childImageSharp {
          fixed(width: 500, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
    }
    background:file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fixed(width: 500, height: 500) {
            ...GatsbyImageSharpFixed
          }
        }
    }
    person:file(relativePath: { eq: "person.png" }) {
        childImageSharp {
          fixed(width: 500, height: 1500) {
            ...GatsbyImageSharpFixed
          }
        }
    }
}  
`
