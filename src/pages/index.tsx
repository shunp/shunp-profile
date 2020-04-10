import React from "react"
import Header from '../components/header'
import Hero from '../views/Hero'
import TechCategories from '../views/TechStack'
import AppAppBar from "../views/AppAppBar"
import { graphql } from "gatsby"
import TopScene from '../three/scene/TopScene'
import BlockchainScene from "../three/scene/BlockchainScene"
import XRScene from "../three/scene/XRScene"
import ProfileScene from "../three/scene/ProfileScene"
import Img from 'gatsby-image'

interface Props {
  data: {
    blockchain: string,
    cg: string,
    web: string,
    ml: string,
    cloud: string,
    processing: string,
    ar: string,
    document: string,
    background: string,
    person: string
  }
}

export default ({ data }: Props) => (
  <>
    <Header />
    <TopScene />
    <BlockchainScene />
    <XRScene />
    <ProfileScene images={data.profile.childImageSharp.fixed} />
  </>
)

export const query = graphql`
  query {
    profile:file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fixed(width: 400, height: 300) {
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
