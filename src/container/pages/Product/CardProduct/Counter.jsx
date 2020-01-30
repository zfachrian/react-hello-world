import React, { Component } from 'react';
import {connect} from 'react-redux';

class Counter extends Component{
    /* state = {
        order: 4,
        name: 'Faizal'
    } */
    
    /* handleCounterChange = (newValue) =>{
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
    } */

    render(){
        return(
            <div className="counter">
                <button className="minus" onClick={this.props.handleMinus}>(-)</button>
                <input type="text" placeholder="count ..." value={this.props.order} />
                <button className="plus" onClick={this.props.handlePlus}>(+)</button>
            </div>
        )
    }
}

/**
 * mapStateToProps dogunakan untuk mengambil state global menggunakan Redux
 */
const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

/**
 * mapDispatchToProps dogunakan untuk merubah state global menggunakan Redux
 */
const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({type: 'PLUS_ORDER'}),
        handleMinus: () => dispatch({type: 'MINUS_ORDER'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);