import React, {Component} from "react";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import "./App.css";
import {Link} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: "",
            sort: "",
            cartItems: [],
            products: [],
            filteredProducts: []
        };
    }

    componentWillMount() {
        if (localStorage.getItem("cartItems")) {
            this.setState({
                cartItems: JSON.parse(localStorage.getItem("cartItems"))
            });
        }

        fetch("http://localhost:8000/products")
            .then(res => res.json())
            .catch(err =>
                fetch("db.json")
                    .then(res => res.json())
                    .then(data => data.products)
            )
            .then(data => {
                this.setState({products: data});
                this.listProducts();
            });
    }

    handleRemoveFromCart = (e, product) => {
        this.setState(state => {
            const cartItems = state.cartItems.filter(a => a.id !== product.id);
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            return {cartItems: cartItems};
        });
    };

    handleAddToCart = (e, product) => {
        this.setState(state => {
            const cartItems = state.cartItems;
            let productAlreadyInCart = false;

            cartItems.forEach(cp => {
                if (cp.id === product.id) {
                    cp.count += 1;
                    productAlreadyInCart = true;
                }
            });

            if (!productAlreadyInCart) {
                cartItems.push({...product, count: 1});
            }
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            return {cartItems: cartItems};
        });
    };

    handlePlusFromCart = (e, product) => {
        return this.modifyProduct(e, product, 'add');
    };

    handleMinusFromCart = (e, product) => {
        return this.modifyProduct(e, product, 'delete');
    };

    modifyProduct(e, product, mode) {
        let cartList = this.state.cartItems;
        cartList.forEach(cp => {
            if (cp.id === product.id && cp.count > 1) {
                mode === 'delete' ? cp.count-- : cp.count++;
                this.setState(state => {
                    localStorage.setItem("cartItems", JSON.stringify(cartList));
                    return {cartItems: cartList}
                });
            } else if (cp.id === product.id && cp.count === 1 && mode === 'delete') {
                this.handleRemoveFromCart(e, product);
            }
        });

    }

    listProducts = () => {
        this.setState(state => {
            if (state.sort !== "") {
                state.products.sort((a, b) =>
                    state.sort === "lowestprice"
                        ? a.price > b.price
                        ? 1
                        : -1
                        : a.price < b.price
                        ? 1
                        : -1
                );
            } else {
                state.products.sort((a, b) => (a.id > b.id ? 1 : -1));
            }
            return {filteredProducts: state.products};
        });
    };
    handleSortChange = e => {
        this.setState({sort: e.target.value});
        this.listProducts();
    };


    render() {
        return (
            <div className="container">

                <img src={`products/logo.png `} alt="App-logo" width="200" height="100"/>
                <h1>Shopping Center</h1>

                <hr/>

                <div className="row">
                    <div className="col-md-9">
                        <Filter
                            count={this.state.filteredProducts.length}
                            handleSortChange={this.handleSortChange}
                        />
                        <hr/>
                        <Products
                            products={this.state.filteredProducts}
                            handleAddToCart={this.handleAddToCart}
                        />
                    </div>
                    <div className="col-md-3">
                        <Cart
                            cartItems={this.state.cartItems}
                            handleRemoveFromCart={this.handleRemoveFromCart}
                            handleMinusFromCart={this.handleMinusFromCart}
                            handlePlusFromCart={this.handlePlusFromCart}
                        />

                    </div>
                </div>

            </div>


        );

    }

}

export default App;
