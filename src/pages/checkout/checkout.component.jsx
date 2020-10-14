import React from 'react'; 
import { connect } from 'react-redux';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'

import './checkout.styles.scss'


const CheckoutPage = ({cartItems, total}) => (
  <div className="checkout-page">
    <div className="checkout-header">
        <div className="header-block">
            <p>Product</p>
        </div>
        <div className="header-block">
            <p>Description</p>
        </div>
        <div className="header-block">
            <p>Quantity</p>
        </div>
        <div className="header-block">
            <p>Price</p>
        </div>
        <div className="header-block">
            <p>Remove</p>
        </div>
    </div>
    {
        cartItems.map(cartItem => cartItem.name)
    }
    <div className="total">
        <p>TOTAL: ${total}</p>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    total: selectCartTotal(state)
  });

export default connect(mapStateToProps)(CheckoutPage); 