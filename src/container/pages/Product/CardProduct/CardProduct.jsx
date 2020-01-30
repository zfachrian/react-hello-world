import React, { Component } from 'react';
import Counter from './Counter';

class CardProduct extends Component{

    render(){
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://i.ytimg.com/vi/QkRRH21AYQo/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLC0gPvmoqUXVyTUBJ1csVvy4IEJ9Q" alt="" />
                </div>
                <p className="product-title">Daging ayam berbumbu</p>
                <p className="product-price">Rp. 100.000</p>
                <Counter />
            </div>
        )
    }
}

export default CardProduct;