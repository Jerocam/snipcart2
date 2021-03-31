import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FaShoppingBag } from "@react-icons/all-files/fa/FaShoppingBag";
import { BiReset } from "@react-icons/all-files/bi/BiReset";
import { StaticImage } from "gatsby-plugin-image";

const Header = ({ siteTitle }) => (
  <header
    style={{
      height:`120px`,
      boxShadow:`0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
      background: `#6441a5`,  /* fallback for old browsers */
      background: `-webkit-linear-gradient(to left, #6441a5, #2a0845)`,  /* Chrome 10-25, Safari 5.1-6 */
      background: `linear-gradient(to left, #6441a5, #2a0845)`, /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      marginBottom: `4rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1260,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div style={{ margin: 0, float:`left` }}>
      <StaticImage width={50} height={50} src="../images/jo.png" alt="logo-jerocam"/>
      <h1 style={{ marginLeft:`15px`, float:`right` }} >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize:`1.4em`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      </div>
      <div style={{ float:`right` }} className="Header__summary snipcart-summary">
              <div className="Header__summary__title">
                MY CART 🛍
              </div>
              <div className="Header__summary__line">
                Number of items: <span className="snipcart-total-items"></span>
              </div>
              <div className="Header__summary__line">
                Total price:$ <span className="snipcart-total-price"></span>
              </div>
      </div>
      <div className="circle-btn" style={{marginTop:`30px`, marginRight:`60px`, float:`right`}}>
        <ul>
          <li><a href="#"><FaShoppingBag aria-hidden="true" className="snipcart-checkout"/></a></li>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
