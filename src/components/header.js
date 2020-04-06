import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

import Title from "../images/jag-int-logo.svg"

const Header = () => {
  const [activePage, setActivePage] = useState({
    about: false,
    services: false,
    contact: false,
  })

  useEffect(() => {
    let windowLoc = window.location.href.split("/")[3]

    if (windowLoc.includes("?")) {
      windowLoc = windowLoc.split("?")[0]
    }

    switch (windowLoc) {
      case "about":
        setActivePage(state => ({ ...state, about: true }))
        break
      case "services":
        setActivePage(state => ({ ...state, services: true }))
        break
      case "contact":
        setActivePage(state => ({ ...state, contact: true }))
        break
      default:
    }
  }, [])

  // const data = useStaticQuery(graphql`
  //   query {
  //     placeholderImage: file(relativePath: { eq: "jag-int-logo.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 300) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <header className="header-container">
      <div className="header-title">
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} /> */}
          <img src={Title} alt="logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link
            to="/about"
            className={activePage["about"] ? "active-header" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={activePage["services"] ? "active-header" : ""}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={activePage["contact"] ? "active-header" : ""}
          >
            Contact
          </Link>
        </li>
        <li>
          <a
            href="https://jagintegrated.integralcs.com/login"
            className="header-login"
          >
            Login
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header
