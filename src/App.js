import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/Landing";
import Search from "./components/Search";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
					</header>
					<Route exact path="/" component={Landing} />
					<Route path="/search" component={Search} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
