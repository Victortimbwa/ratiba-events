import React from "react";
import styles from "./upcoming.module.css";
import Image from "next/image";

const UpcomingEvents = () => {
	return (
		<div className={styles.upcoming_events}>
			<h2>Upcoming Events</h2>
			<div className={styles.events_container}>
				<div>
					<Image
						src="/assets/images/18.jpg"
						alt="Event 1"
						width={200}
						height={200}
						loading="lazy"
					/>
					<h5>Pwani Innovation Week</h5>
					<p> At KICC</p>
					<p>December 1-3, 2021</p>
				</div>
				<div>Event 2</div>
				<div>Event 3</div>
				<div>Event 4</div>
			</div>
		</div>
	);
};

export default UpcomingEvents;
