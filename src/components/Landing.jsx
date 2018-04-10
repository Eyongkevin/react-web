import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
	return (
		<div className="landing">
			<h1>Landing here</h1>
			<Link to="/search"> or Browse All </Link>
		</div>
	);
};

export default Landing;
