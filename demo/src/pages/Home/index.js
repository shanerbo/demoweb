import React,{Component} from 'react';
import Navbar from '../../components/navbar.js';
import Product from '../../components/product.js';
import '../../components/asset/img/index.css';

class Home extends Component{
    render(){
        return (

            <div>
                <Navbar/>
                <Product/>

                
            </div>


        );


    }
}

export default Home