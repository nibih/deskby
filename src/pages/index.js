import React from "react"
import Workspace from "../components/Workspace"
import Clients from "../components/Clients"
import Works from "../components/Works"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Workspace />
    <Works />
    <Clients />
    <Contact />
  </Layout>
)

export default IndexPage
