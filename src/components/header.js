import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <header className="header-container">
      <div className="header-title">
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a href="https://jagintegrated.integralcs.com/login">Login</a>
        </li>
      </ul>
    </header>
  )
}

export default Header
