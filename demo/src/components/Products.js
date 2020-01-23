import React, { Component } from 'react';
import util from '../util'


export default class Products extends Component {

    render() {
        const productItems = this.props.products.map(product => (
            <div className="col-md-4" key={product.id}>
                <div className="thumbnail text-center">
                    <a href={`#${product.id}`}onClick={(e)=>this.props.handleAddToCart(e, product)}> 
                        <img src={`products/${product.sku}.jpg `} alt={product.title} width="300" height="300"/>
                        <p>{product.title}</p>                        
                    </a>
                    <b>{util.formatCurrency(product.price)}</b>
                    <button className="btn btn-primary" onClick={(e)=>this.props.handleAddToCart(e, product)}>Add to cart</button>
                </div>
            </div>
        ));

        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}




