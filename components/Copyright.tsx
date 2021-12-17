import React from "react";
import Link from "next/link";

const Copyright = (): JSX.Element => (
	<section className="copyright">
		<div className="container">
			<p className="left">
				Fait avec ❤ par{" "}
				<Link href="#0" passHref>
					<a className="link" title="Voir">
						Tahiry
					</a>
				</Link>{" "}
				et{" "}
				<Link href="#0" passHref>
					<a
						className="link"
						href="https://linkedin.com/in/harijaona-rajaonson/"
						title="Voir le profil LinkedIn"
					>
						Hari
					</a>
				</Link>
				.
			</p>
			<p className="right">
				Copyright © {new Date().getFullYear()} Singer France, Tous droits réservés.
			</p>
		</div>
	</section>
);

export default Copyright;
