import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/Landing";
import { HashRouter, Route } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<HashRouter>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
					</header>
					<Route exact path="/" component={Landing} />
				</div>
			</HashRouter>
		);
	}
}

export default App;
