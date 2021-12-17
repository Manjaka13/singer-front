import React from "react";
import Link from "next/link";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faExclamationCircle);

const Notfound = (): JSX.Element => (
	<section className="notfound">
		<div className="container">
			<div className="notfound__window">
				<h2 className="title">
					<Icon icon={faExclamationCircle} /> Oups, page introuvable !
				</h2>
				<div className="separator"></div>
				<p className="text">
					Il semblerait que le contenu que vous voulez consuler n&apos;existe pas ou
					a été retiré du site, veuillez revenir à{" "}
					<Link href="/" passHref>
						<a className="link" title="Revenir à l'accueil">
							l&apos;accueil
						</a>
					</Link>{" "}
					du site pour continuer votre navigation.
				</p>
			</div>
		</div>
	</section>
);

export default Notfound;
