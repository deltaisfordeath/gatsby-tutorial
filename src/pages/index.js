import * as React from "react"
import Layout from "./layout";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Gatsby Intro</title>
