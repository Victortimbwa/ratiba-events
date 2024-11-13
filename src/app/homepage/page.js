import React from "react";
import Header from "../components/header/Header";
import HeroSection from "../components/hero-section/hero";
import UpcomingEvents from "../components/upcoming-events/upcoming_events";
import PastEvents from "../components/past_events/past_events";
import HowItWorks from "../components/guide/guide";

const page = () => {
	return (
		<div>
			<Header />
			<HeroSection />
			<UpcomingEvents />
			<PastEvents />
			<HowItWorks />
		</div>
	);
};

export default page;
