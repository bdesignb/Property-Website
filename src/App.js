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
				<Route exact path='/' component={Home} />
				<Route exact path='/property' component={Property} />
			</Switch>
		</>
		);
	}
}

export default App;
