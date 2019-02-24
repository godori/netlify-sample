import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Godori Static Blog</h1>
    <ul>
      <li>Gatsby</li>
      <li>Netlify</li>
    </ul>
  </Layout>
)

export default IndexPage
