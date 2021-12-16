import React from "react";
import Link from "next/link";

const Copyright = (): JSX.ELement => (
	<section class="copyright">
		<div class="container">
			<p class="left">Fait avec ❤ par <Link href="#0" passHref><a class="link" title="Voir">Tahiry</a></Link> et <Link href="#0" passHref><a class="link" href="#0" title="Voir">Hari</a></Link>.</p>
			<p class="right">Copyright © {new Date().getFullYear()} Singer France, Tous droits réservés.</p>
		</div>
	</section>
);

export default Copyright;