import * as React from "react"
import Layout from "./layout";
import { StaticImage } from "gatsby-plugin-image"; 

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          alt="The surface of the moon, provided by NASA"
          src="../images/nasa-moon.jpg"
        />
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Gatsby Intro</title>
