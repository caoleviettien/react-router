import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink  } from "react-router-dom";
class Nav extends Component {    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
			  <div className="container">
			    <NavLink className="navbar-brand js-scroll-trigger" to="/home">React Router - NEWS</NavLink>
			    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
			      Menu
			      <i className="fas fa-bars" />
			    </button>
			    <div className="collapse navbar-collapse" id="navbarResponsive">
			      <ul className="navbar-nav ml-auto">
			        <li>
		              <NavLink to="/home">Home</NavLink>
		            </li>
		            <li>
		              <NavLink to="/news">Tin Tức</NavLink>
		            </li>
		            <li>
		              <NavLink to="/newsdetails">Chi Tiết Tin</NavLink>
		            </li>
		            <li>
		              <NavLink to="/contact">Liên Hệ</NavLink>
		            </li>
			      </ul>
			    </div>
			  </div>
			</nav>

        );
    }
}
export default Nav;