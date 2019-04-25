import React, { Component } from 'react';
import './../css/App.css';
import Nav from './Nav.js';
import Home from './Home.js';
import Footer from './Footer.js';
import News from './News.js';
import NewsDetails from './NewsDetails.js';
import Contact from './Contact.js';
import DieuHuong from './../router/DieuHuong';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
 	
  render() {     
    return (
    	<Router>
	      <div> 
	      		<Nav/>
	    		{/*<Home/>
	      		{/*<News/>*/}
	      		{/*<NewsDetails/>*/}
	      		{/*<Contact/>*/}


	      		<DieuHuong/>
	      		<Footer/>
	      </div>
	    </Router>
    );
  }
}

export default App;