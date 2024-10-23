"use client";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
	return (
		<div>
			<h1>Sign Up</h1>
			<form>
				<input type="text" placeholder="Enter Email" name="email" />
				<input type="password" placeholder="Password" name="password" />
				<input type="password" placeholder="Confirm Password" name="password" />
				<button type="submit">Sign Up</button>
				<p>
					Already have an account? <Link href="/auth/signin">Sign In</Link>
				</p>
			</form>
		</div>
	);
};

export default SignUp;
