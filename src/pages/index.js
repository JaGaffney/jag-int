import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Item1 from "../components/indexComponents/item1"
import Item2 from "../components/indexComponents/item2"
import Item3 from "../components/indexComponents/item3"
import ContactBanner from "../components/indexComponents/ContactBanner"

const IndexPage = () => (
  <Layout>
    <SEO title="JAG Integrated Services - Home" />

    <Item1 />
    <Item2 />
    <Item3 />
    <ContactBanner />
  </Layout>
)

export default IndexPage
