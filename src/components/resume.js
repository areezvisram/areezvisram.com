import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"

const Resume =() => {
    const myexamplePdf = useStaticQuery(graphql`
    {
      pdf: file(relativePath: { eq: "Resume.pdf" }) {
        name
        extension
        publicURL
      }
    }
  `)
    return (
        <Link to={myexamplePdf.pdf.publicURL}>Resume</Link>
    )
}

export default Resume
