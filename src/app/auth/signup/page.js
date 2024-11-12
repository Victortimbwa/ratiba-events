"use client";
import React from "react";
import styles from "./signup.module.css";

const SignUp = () => {
	return (
		<div className={styles.main}>
			<div className={styles.form}>
				<h2>Register to Ratiba</h2>
				<form className={styles.form}>
					<input type="text" placeholder="Enter first Name" name="firstName" />
					<input type="text" placeholder="Enter last Name" name="lastName" />
					<input type="text" placeholder="Enter userName" name="lastName" />
					<input type="text" placeholder="Enter Email" name="lastName" />
					<input type="text" placeholder="Password" name="password" />
					<button type="submit">Sign Up</button>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
