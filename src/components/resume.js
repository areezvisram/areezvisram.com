import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const Resume =({ onClickFunction }) => {
    const myexamplePdf = useStaticQuery(graphql`
    {
      pdf: file(relativePath: { eq: "Areez Visram Resume.pdf" }) {
        name
        extension
        publicURL
      }
    }
  `)
    return (
        <a href={myexamplePdf.pdf.publicURL} target="_blank" className="resume-link" onClick={onClickFunction}>Resume</a>
    )
}

export default Resume
