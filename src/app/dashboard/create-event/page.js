"use client"
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./event.module.css";

const page = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [charge, setCharge] = useState("free");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const eventData = {
      title: title,
      date: date,
      time: time,
      venue: venue,
      charge: charge,
      description: description,
    };

    // If the image is selected, add it as a base64 string or URL
    if (image) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        eventData.image = reader.result; // Base64 string of the image
        await submitEvent(eventData);
      };
      reader.readAsDataURL(image); // Read image as a base64 URL
    } else {
      await submitEvent(eventData);
    }
  };

  const submitEvent = async (eventData) => {
    try {
      const response = await fetch("https://djangoratiba-d7e3c1112f97.herokuapp.com/events/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        // Event created successfully
        toast.success("Event created successfully!");
      } else {
        const data = await response.json();
        console.error("Error details:", data); // Log the error details
        toast.error(data.message || "Failed to create event.");
      }
    } catch (error) {
      toast.error("Error submitting the form. Please try again later.");
      console.error("Network error:", error); // Log any network error
    }

    setLoading(false);
  };

  return (
    <div className={styles.main}>
      <ToastContainer /> {/* Toastify container to show the toasts */}
      <form onSubmit={handleSubmit}>
        <h1>Create Event</h1>
        <div className={styles.form_group}>
          <div>
            <label htmlFor="event-name">Event Name</label>
            <input
              type="text"
              id="event-name"
              placeholder="Enter event name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="event-date">Event Date</label>
            <input
              type="date"
              id="event-date"
              placeholder="Enter event date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={styles.form_group}>
          <div>
            <label htmlFor="event-time">Event Time</label>
            <input
              type="time"
              id="event-time"
              placeholder="Enter event time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="event-location">Event Location</label>
            <input
              type="text"
              id="event-location"
              placeholder="Enter event location"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={styles.form_group}>
          <div>
            <label htmlFor="event-image">Event Image</label>
            <input
              type="file"
              id="event-image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div>
            <label htmlFor="event-description">Event Description</label>
            <textarea
              id="event-description"
              placeholder="Enter event description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={styles.form_group}>
          <div>
            <label htmlFor="event-charge">Charge</label>
            <select
              id="event-charge"
              value={charge}
              onChange={(e) => setCharge(e.target.value)}
            >
				<option value="free">Free</option>
				<option value="pay">Pay</option>
			</select>
          </div>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Event"}
        </button>
      </form>
    </div>
  );
};

export default page;

