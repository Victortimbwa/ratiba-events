import React from "react";
import Header from "./components/header/Header";
import HeroSection from "./components/hero-section/hero";
import UpcomingEvents from "./components/upcoming-events/upcoming_events";

const page = () => {
	return (
		<div>
			<Header />
			<HeroSection />
			<UpcomingEvents />
		</div>
	);
};

export default page;
