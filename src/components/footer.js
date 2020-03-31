import React from "react"

// import { FiGithub, FiGlobe, FiYoutube } from "react-icons/fi"

const Footer = () => {
  return (
    <div className="footer-container">
      <ul>
        <li>
          <a
            href="https://jagintegrated.integralcs.com/login"
            className="header-login"
          >
            Login
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/jagintegrated">Facebook</a>
        </li>
        <li>
          <a href="https://jongaffney.tech/">Linked In</a>
        </li>
      </ul>

      <div className="footer-copyright">
        <span>PO Box 193 | North Melbourne | VIC | 3051</span>
      </div>
      <div className="footer-copyright">
        <span>
          © 2020{" "}
          <span style={{ color: "var(--dominant)" }}>
            JAG Integrated Services
          </span>
        </span>
      </div>
    </div>
  )
}

export default Footer
