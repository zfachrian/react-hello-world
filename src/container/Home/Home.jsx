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
import GlobalProvider from '../../context/context';

class Home extends Component{

	render(){
		return(
			<Router>
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
			</Router>
		)
	}
}

export default GlobalProvider(Home);