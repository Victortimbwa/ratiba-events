"use client";
import styles from "./signin.module.css";
import { useRouter } from "next/navigation";

const SignIn = () => {
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		router.push("/dashboard");
	};

	return (
		<section className={styles.homelogin}>
			<div className={styles.left}>
				<h1>
					Welcome to <br></br>
					<span>Ratiba Events</span>
				</h1>
			</div>
			<div className={styles.right}>
				<h3>LOGIN</h3>
				<p>Sign in to continue.</p>
				<form className={styles.loginform}>
					<div className={styles.inputbox}>
						<input
							type="text"
							placeholder="Enter Email"
							name="email"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="inputbox">
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button type="submit" className="login-button" onClick={handleSubmit}>
						Login
					</button>
					<p>
						Don't have an account? <a href="/auth/signup">Sign Up</a>
					</p>
				</form>
			</div>
		</section>
	);
};

export default SignIn;
