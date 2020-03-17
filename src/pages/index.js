import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Item1 from "../components/indexComponents/item1"
import Item2 from "../components/indexComponents/item2"
import Item3 from "../components/indexComponents/item3"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Item1 />
    <div className="item-break"></div>
    <Item2 />
    <div className="item-break"></div>
    <Item3 />
  </Layout>
)

export default IndexPage
