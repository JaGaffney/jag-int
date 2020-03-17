import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ThankYou = () => (
  <Layout>
    <SEO title="Thank you!" />
    <h1>Thank you for getting in Touch</h1>
    <p>We will get back to you as soon as we can.</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThankYou
