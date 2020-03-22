import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Property from './pages/Property';
import './App.css';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (<>
			<Navbar />
			<Switch>
				<Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
				<Route exact path={process.env.PUBLIC_URL + '/property'} component={Property} />
			</Switch>
		</>
		);
	}
}

export default App;
