"use client";
import React, { useState, useEffect } from "react";
import styles from "./all-events.module.css";
import Image from "next/image";

const AllEvents = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		// Fetch events from the API endpoint
		const fetchEvents = async () => {
			try {
				const response = await fetch(
					"https://djangoratiba-d7e3c1112f97.herokuapp.com/events/?page=1"
				);
				if (!response.ok) {
					throw new Error("Failed to fetch events");
				}
				const data = await response.json();
				setEvents(data.results); // Sets the results array from the response to events state
			} catch (error) {
				console.error("Error fetching events:", error);
			}
		};

		fetchEvents();
	}, []);

	const handleRSVP = async (eventId) => {
		try {
			const response = await fetch(
				"https://djangoratiba-d7e3c1112f97.herokuapp.com/events/rsvp/",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ eventId }),
				}
			);

			if (!response.ok) {
				throw new Error("RSVP failed");
			}

			alert("RSVP successful");
		} catch (error) {
			console.error("Error posting RSVP:", error);
			alert("RSVP failed. Please try again.");
		}
	};

	return (
		<div className={styles.upcoming_events}>
			<h2>All Events</h2>
			<div className={styles.events_container}>
				<div className={styles.events}>
					{events.map((event) => (
						<div key={event.id} className={styles.card}>
							<Image
								src={event.image || "/assets/18.jpg"} // Placeholder image if event.image is null
								alt={event.title}
								width={200}
								height={200}
								loading="lazy"
							/>
							<h6>{event.title}</h6>
							<p>{event.date}</p>
							<p>{event.time}</p>
							<p>{event.venue}</p>
							<p>{event.charge}</p>
							<button
								onClick={() => handleRSVP(event.id)}
								className={styles.rsvp_button}>
								RSVP
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AllEvents;
