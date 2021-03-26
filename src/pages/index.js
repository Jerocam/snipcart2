import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <div>
      {
        data.products.edges.map(({ node: product }) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.ahora}</p>
          </div>
        ))
      }
    </div>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query JerocamQuery {
    products: allDatoCmsJerocamshop {
      edges {
        node {
          id
          name
          ahora
        }
      }
    }
  }`