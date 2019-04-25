import React, { Component } from 'react';
import Home from './../component/Home';
import News from './../component/News';
import NewsDetails from './../component/NewsDetails';
import Contact from './../component/Contact';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

export default class DieuHuong extends Component {
	render() {
		return (
			<div>
			      <div>
				      <aside>
	        			<Switch>		
	        				<Redirect exact from="/" to="/home" component={Home} />   
	        				<Route path="/home" exact component={Home} />
					        <Route path="/news" exact component={News} />
					        <Route path="/newsdetails" exact component={NewsDetails} />
					        <Route path="/contact" exact component={Contact} />
				        </Switch>
	     			  </aside>
			      </div>
			</div>
		);
	}
}
