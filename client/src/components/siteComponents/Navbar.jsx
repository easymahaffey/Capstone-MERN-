import React from 'react'
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="Navbar nav-wrapper gray darken-3">
      <div className="container">
        <p className="brand-logo left">Capstone</p>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          { props.isAuthorized ? <li><NavLink to="/projects">Projects</NavLink></li> : "" }
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) =>{
	return {
		isAuthorized : state.auth.isAuthorized,
	};
};

export default connect(mapStateToProps, null)(withRouter(Navbar));