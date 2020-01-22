import React,{Component} from 'react';
import logo from './asset/img/logo.png'
import '../components/asset/img/index.css';


class Navbar extends Component{
    render(){
        return (
        <div>
            <header className="header-area">
                <div className="famie-main-menu">
                    <div className="classy-nav-container breakpoint-off">
                        <div className="container">
                            <nav className="classy-navbar justify-content-between" id="famieNav">
                                <a href="index.html" className="navbrand"><img src={logo} alt=""/></a>
                                <div className="classy-navbar-toggler">
                                <span className="navbarToggler"><span></span><span></span><span></span></span>
                                </div>
                                <div className="classy-menu">
                                <div className="classycloseIcon">
                                    <div className="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                                </div>
                                <div className="classynav">
                                    <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="product.html">Product</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                    <li><a href="cart.html"><button><span className="mr-2"><i className="fas fa-cart-plus " /></span>my cart</button></a></li>       
                                    </ul>
                                </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        )
    }



}

export default Navbar
