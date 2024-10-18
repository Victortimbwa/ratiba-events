import React from "react";
import header from "./header.module.css";

const Header = () => {
	return (
		<div className={header.main}>
			<ul className={header.list}>
				<li>Home</li>
				<li>About US</li>
				<li>Events</li>
				<li>Create Event</li>
				<li>Profile</li>
			</ul>
		</div>
	);
};

export default Header;
