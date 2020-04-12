import React from "react"
import Header from '../components/header'
import { graphql } from "gatsby"
import TopScene from '../three/scene/TopScene'
import BlockchainScene from "../three/scene/BlockchainScene"
import XRScene from "../three/scene/XRScene"
import ProfileScene from "../three/scene/ProfileScene"
import "../styles/base.css"
interface Props {
  data: {
    profile: string,
    person: string
  }
}

export default ({ data }: Props) => (
  <>
    <nav>
      <a href="#1">1</a>
      <a href="#2">2</a>
      <a href="#3">3</a>
    </nav>

    <div className="scrolling-box">
      <Header />
      <section id="1">
        <TopScene />
      </section>
      <section id="2">
        <BlockchainScene />
      </section>
      <section id="3">
        <XRScene />
      </section>
      <ProfileScene images={data.profile.childImageSharp.fixed} />
    </div>

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
