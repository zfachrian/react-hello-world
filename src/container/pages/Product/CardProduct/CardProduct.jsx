import React, { Component } from 'react';

class CardProduct extends Component{

    state = {
        order: 4,
        name: 'Faizal'
    }

    handleCounterChange = (newValue) =>{
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }

    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
    }

    render(){
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://i.ytimg.com/vi/QkRRH21AYQo/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLC0gPvmoqUXVyTUBJ1csVvy4IEJ9Q" alt="" />
                </div>
                <p className="product-title">Daging ayam berbumbu</p>
                <p className="product-price">Rp. 100.000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>(-)</button>
                    <input type="text" placeholder="count ..." value={this.state.order} />
                    <button className="plus" onClick={this.handlePlus}>(+)</button>
                </div>
            </div>
        )
    }
}

export default CardProduct;