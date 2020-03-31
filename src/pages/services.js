import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <div className="generic-container">
      <h1>ServicesPage</h1>
      <p>
        <i>details coming soon</i>
      </p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default ServicesPage
