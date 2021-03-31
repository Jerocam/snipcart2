import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { HiShoppingCart } from "@react-icons/all-files/hi/HiShoppingCart";

import Layout from "../components/layout"
import SEO from "../components/seo"

const Sizes = [
  // data-item-custom1-options="6|6.5|7|7.5|8|8.5|9"
]

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <section>
      <div className="grid-container">
      {
        data.products.edges.map(({ node: product }) => (
          <div className="grid-item" key={product.id}>
            <div className="container" >
              <img className="img-prod" src={product.image.url} alt="a product jerocam"/>
                <div className="info">
                  <h3>{product.name}</h3>
                  <h4>${product.price}</h4>
                </div>
                <button
                  className="snipcart-add-item ip-add-cart"
                  data-item-id={product.id}
                  data-item-price={product.price}
                  data-item-url="/"
                  data-item-name={product.name}
                  data-item-custom1-name="Size"
                  data-item-custom1-options="6|6.5|7|7.5|8|8.5|9"
                  data-item-custom2-name="This is a gift" data-item-custom2-type="checkbox"
                  >
                  <HiShoppingCart className="shop-icon"/> Add to cart
                </button>
            </div>
          </div>
        ))
      }
      </div>
    </section>
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
          price
          image {
            url
          }
        }
      }
    }
  }`
