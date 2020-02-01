import React, { Component } from 'react';
import util from '../util'
export default class Cart extends Component {
    render() {
        const { cartItems } = this.props;

        return (
            <div className="alert alert-info">
                {cartItems.length === 0
                    ? "Cart is empty" :
                    <div>You have {cartItems.length} items in the cart. <hr /></div>
                }
                {cartItems.length > 0 &&
                    <div>
                        <ul style={{ marginLeft: -25 }}>
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <b>{item.title}</b>
                                    <button style={{ float: 'right' }} className="btn btn-danger btn-xs"
                                        onClick={(e) => this.props.handleRemoveFromCart(e, item)}>Delete</button>
                                    <br />
                                    <button style={{ float: 'pull-right' }} className="btn btn-danger btn-xs"
                                        onClick={(e) => this.props.handleMinusFromCart(e, item)}>-</button>
                                    {item.count} 
                                    <button style={{ float: 'pull right' }} className="btn btn-danger btn-xs"
                                        onClick={(e) => this.props.handlePlusFromCart(e, item)}>+</button>
                                    <br />
                                    {util.formatCurrency(item.price)}
                                </li>))
                            }
                        </ul>

                        <b>Total: {util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}
                        </b>
                        <button onClick={() => alert('Todo: Implement checkout page.')} className="btn btn-primary">checkout</button>
                    </div>
                }
            </div>
        )
    }
}
