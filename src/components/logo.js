import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
    <div>
      <Img
        fixed={data.image.childImageSharp.fixed}
        alt="logo"
        style={{ top: -20 }}
      />
    </div>
  )
}

export default Logo
