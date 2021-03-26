import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <a href="#" className="Header__summary snipcart-summary snipcart-checkout">
            <div className="Header__summary__title">
                🛍 MY CART 🛍
            </div>
            <div className="Header__summary__line">
                Number of items: <span className="snipcart-total-items"></span>
            </div>
            <div className="Header__summary__line">
                Total price: <span className="snipcart-total-price"></span>
            </div>
        </a>
    <div className="Catalogue">
    {
      data.products.edges.map(({ node: product }) => (
        <div className="Catalogue__item" key={product.id}>
          <a
            href="#"
            className="Product snipcart-add-item"
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-name={product.name}
            data-item-url={`/`}
          >
            click
          </a>
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
          price
        }
      }
    }
  }`