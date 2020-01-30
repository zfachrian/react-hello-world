import React, { Component, Fragment } from 'react';
import './Product.css';
import CardProduct from './CardProduct/CardProduct';

class Product extends Component{

    state = {
        order: 4,
        name: 'Faizal'
    }

    handleCounterChange = (newValue) =>{
        this.setState({
            order: newValue
        })
    }

    render(){
        return(
            <Fragment>
                <p>Halaman Product</p>
                <hr/>
                <div className="header">
                    <div className="logo">
                        <img src="https://clipartart.com/images/white-home-icon-transparent-clipart-1.png" alt="" />
                    </div>
                    <div className="troley">
                        <img src="https://cdn6.aptoide.com/imgs/8/3/8/8385f1d1790787d856c0347b2bf1e175_icon.png?w=256" alt="" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
            </Fragment>
        )
    }
}

export default Product;