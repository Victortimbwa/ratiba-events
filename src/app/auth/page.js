"use client";
import styles from "./signin.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignIn = () => {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Perform any necessary validation orAPI calls
		router.push("/dashboard");
	};

	return (
		<section className={styles.homelogin}>
			<div className={styles.left}>
				<h1>
					Welcome to <br />
					<span>Ratiba Events</span>
				</h1>
			</div>
			<div className={styles.right}>
				<h3>LOGIN</h3>
				<p>Sign in to continue.</p>
				<form className={styles.loginform} onSubmit={handleSubmit}>
					<div className={styles.inputbox}>
						<input
							type="text"
							placeholder="Enter Email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className={styles.inputbox}>
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button type="submit" className="login-button">
						Login
					</button>
					<p>
						Don't have an account? <a href="/auth">Sign Up</a>
					</p>
				</form>
			</div>
		</section>
	);
};

export default SignIn;
