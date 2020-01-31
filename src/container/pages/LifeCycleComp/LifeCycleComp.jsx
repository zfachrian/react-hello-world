import React, {Component, Fragment} from 'react';
import './LifeCycleComp.css';
import {connect} from 'react-redux';
import { GlobalConsumer } from '../../../context/context';

class LifeCycleComp extends Component{

    constructor(props){
        super(props);
        this.state = {
            count: 1
        }

        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps');
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount');

        /* setTimeout(() => {
            this.setState({
                count: 2
            })
        }, 5000) */
    }

    shouldComponentUpdate(nextProps, nextState){

        console.group('shouldComponentUpdate');
        // console.log('nextProps: ', nextProps);
        console.log('nextState: ', nextState);
        console.log('This state', this.state);
        console.groupEnd();
        
        if(nextState.count >= 4) return false; else return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    changeCount = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

	render(){
		return(
			<Fragment>
				<p>Halaman Life Cycle</p>
				<hr />
				<button className="btn" onClick={this.changeCount}>Component Button {this.state.count}</button>
				<hr />
				<p>Total Order: {this.props.state.totalOrder}</p>
			</Fragment>
		)
	}
}

/**
 * mapStateToProps dogunakan untuk mengambil state global menggunakan Redux
 */
/* const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
} */

// export default connect(mapStateToProps)(LifeCycleComp);
export default GlobalConsumer(LifeCycleComp);