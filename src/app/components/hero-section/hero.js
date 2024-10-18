import React from "react";
import styles from "./hero.module.css";

const HeroSection = () => {
	return (
		<div className={styles.hero_banner}>
			<div className={styles.banner_content}>
				<h2>One time Platform to manage your events</h2>
				<p>
					Event management made easy with our platform. Create, manage and share
					your events with ease.
				</p>
			</div>
		</div>
	);
};

export default HeroSection;
