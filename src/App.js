import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//- Navbar Component
import Navbar from './components/Navbar/index';
//---------
//- Main Component
import Main from './components/Main/index';
//---------
//- Contact Component
import Contact from './components/Contact/index';
//---------

import './main.sass';

class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Navbar />
					<Route exact path="/home" component={Main} />
					<Route path="/contact" component={Contact} />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
