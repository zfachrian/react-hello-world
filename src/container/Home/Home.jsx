//Libraries
import React, { Component, Fragment, createContext } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//Pages
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';

//Style
import './Home.css';

/**
 * Context API
 * State Management, berguna untuk melakukan routing pengiriman perubahan value untuk global
 * Fungsionalitas sama dengan Redux, namun Context API hadir dengan skema yang sederhana
 */
export const RootContext = createContext();
const Provider = RootContext.Provider;

class Home extends Component{

	/**
	 * Inisialisasi kebutuhan State Global
	 */
	state = {
		totalOrder: 0
	}

	/**
	 * Dispatch
	 * Berfungsi untuk menjalakan task yang dibuat
	 */
	dispatch = (action) => {
		if(action.type === 'PLUS_ORDER'){
			return this.setState({
				totalOrder: this.state.totalOrder + 1
			})
		}
		if(action.type === 'MINUS_ORDER'){
			return this.setState({
				totalOrder: this.state.totalOrder - 1
			})
		}		
	}

	render(){
		return(
			<Router>
				<Provider value={
					{
						state: this.state,
						dispatch: this.dispatch
					}
					}>
					<Fragment>
						<div className="navigation">
							<Link to="/">Blog Post</Link>
							<Link to="/product">Product</Link>
							<Link to="/lifecycle">Life Cycle</Link>
							<Link to="/youtube-component">Youtube</Link>
						</div>
						<Route path="/" exact component={BlogPost} />
						<Route path="/detail-post/:postID" component={DetailPost} />
						<Route path="/product" component={Product} />
						<Route path="/lifecycle" component={LifeCycleComp} />
						<Route path="/youtube-component" component={YoutubeCompPage} />
					</Fragment>
				</Provider>
			</Router>
		)
	}
}

export default Home;