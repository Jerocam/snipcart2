import * as React from "react"

const Cart = () => (
    <React.Fragment>
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
    </React.Fragment>
)

export default Cart