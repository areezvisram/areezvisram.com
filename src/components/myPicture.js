import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"



const MyPicture = () => {
  const data = useStaticQuery(graphql`
    query me {
      image: file(relativePath: { eq: "mypicture.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  return (
    <Img
      fluid={data.image.childImageSharp.fluid}
      alt="me"
      className="me" 
    />
  )
}

export default MyPicture
