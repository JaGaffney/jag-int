import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Title from "../images/jag-int-logo.svg"
import NavbarLanding from "./header/NavbarLanding"

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

  return (
    <header className="header-container">
      <div className="header-title">
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          <img src={Title} alt="logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <a
            href="/#landing-about"
            className={activePage["about"] ? "active-header" : ""}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/#landing-services"
            className={activePage["services"] ? "active-header" : ""}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="/#landing-contact"
            className={activePage["contact"] ? "active-header" : ""}
          >
            Contact
          </a>
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
      <NavbarLanding />
    </header>
  )
}

export default Header
