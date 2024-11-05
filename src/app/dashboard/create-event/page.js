import React from "react";
import styles from "./event.module.css";

const page = () => {
	return (
		<div className={styles.main}>
			<form>
				<h1>Create Event</h1>
				<div className={styles.form_group}>
					<div>
						<label for="event-name">Event Name</label>
						<input type="text" id="event-name" placeholder="Enter event name" />
					</div>
					<div>
						<label for="event-date">Event Date</label>
						<input type="date" id="event-date" placeholder="Enter event date" />
					</div>
				</div>
				<div className={styles.form_group}>
					<div>
						<label for="event-time">Event Time</label>
						<input type="time" id="event-time" placeholder="Enter event time" />
					</div>
					<div>
						<label for="event-location">Event Location</label>
						<input
							type="text"
							className="form-control"
							id="event-location"
							placeholder="Enter event location"
						/>
					</div>
				</div>

				<div className={styles.form_group}>
					<div>
						<label for="event-image">Event Image</label>
						<input type="file" id="event-image" />
					</div>
					<div>
						<label for="event-description">Event Description</label>
						<textarea
							id="event-description"
							placeholder="Enter event description"
						/>
					</div>
				</div>
				<button type="submit">Create</button>
			</form>
		</div>
	);
};

export default page;
