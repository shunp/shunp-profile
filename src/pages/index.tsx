import React from "react"
import Header from '../components/header'
import { graphql } from "gatsby"
import TopScene from '../three/scene/TopScene'
import BlockchainScene from "../three/scene/BlockchainScene"
import XRScene from "../three/scene/XRScene"
import ProfileScene from "../three/scene/ProfileScene"
import PortfolioScene from '../three/scene/PortfolioScene'
import "../styles/base.css"
interface Props {
  data: {
    profile: string,
    person: string
  }
}

export default ({ data }: Props) => (
  <>
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
      <section id="4">
        <PortfolioScene images={data.book.childImageSharp.fixed} />
      </section>
      <section id="5">
        <ProfileScene images={data.profile.childImageSharp.fixed} />
      </section>
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
    book:file(relativePath: { eq: "book.jpg" }) {
      childImageSharp {
        fixed(width: 500, height: 650) {
          ...GatsbyImageSharpFixed
        }
      }
  }
}
`
