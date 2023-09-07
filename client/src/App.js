import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/siteComponents/Navbar';
import FinalLandingPage from './components/siteComponents/FinalLandingPage';
import LandingPage from './components/siteComponents/LandingPage';
import Projects from './components/projectComponents/Projects';
import QuoteBox from './components/projectComponents/QuoteBox/QuoteBox';
import About from './components/siteComponents/About';
import Contact from './components/siteComponents/Contact';

class App extends Component {
	render() {
		return(
			<BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path = '/' component = { this.props.isAuthorized ? FinalLandingPage : LandingPage } />
            <Route path = '/projects' component = { Projects } />
            <Route path = '/quotebox' component = { QuoteBox } />
            <Route path = '/about' component = { About } />
            <Route path = '/contact' component = { Contact } />
          </Switch>
        </div>
      </BrowserRouter>
		);
	};
};

const mapStateToProps = (state) =>{
	return {
		isAuthorized : state.auth.isAuthorized,
	};
};

export default connect(mapStateToProps, null)(App);