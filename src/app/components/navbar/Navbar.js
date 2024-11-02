import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className={styles.main}>
			<ul className={styles.list}>
				<Link href="/auth/signIn"></Link>
			</ul>
		</div>
	);
};

export default Navbar;
