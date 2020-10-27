import React from 'react'

import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss'

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <p className="name">{name}</p>
            <p className="quantity">
                <span className="arrow" onClick={() => removeItem(cartItem)}>&#8249;</span>
                    <span className="value">{quantity}</span>
                <span className="arrow" onClick={() => addItem(cartItem)}>&#8250;</span>
            </p>
            <p className="price">{price}</p>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#x58;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem); 