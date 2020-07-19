import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "areez.png" }) {
        id
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <AnchorLink to="/#intro">
      <Img
        fixed={data.image.childImageSharp.fixed}
        alt="logo"
        className="logo"
      />
    </AnchorLink>
  )
}

export default Logo
