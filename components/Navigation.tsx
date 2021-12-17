import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faHome,
	faShoppingCart,
	faMapMarkerAlt,
	faBook,
	faNewspaper,
	faBars,
} from "@fortawesome/free-solid-svg-icons";

// Load icons
library.add(
	faHome,
	faShoppingCart,
	faMapMarkerAlt,
	faBook,
	faNewspaper,
	faBars
);

/*
	Navigation component
*/

const Navigation = (): JSX.Element => {
	const links = [
		{
			name: "Accueil",
			title: "Revenir à l'accueil",
			link: "/",
			icon: faHome,
		},
		{
			name: "Produits",
			title: "Voir tous nos produits",
			link: "#products",
			icon: faShoppingCart,
		},
		{
			name: "Magasins",
			title: "Trouvez un point de vente",
			link: "#magasins",
			icon: faMapMarkerAlt,
		},
		{
			name: "Bibliothèque",
			title: "Consulter des livres sur la couture",
			link: "/bibliotheque",
			icon: faBook,
		},
		{
			name: "Actualités",
			title: "Consulter des livres sur la couture",
			link: "/actualites",
			icon: faNewspaper,
		},
	];

	const mappedLinks = links.map((item) => (
		<li className="section__item" key={uuidv4()}>
			<Link href={item.link} passHref>
				<a className="section__link" title={item.title}>
					<Icon icon={item.icon} /> {item.name}
				</a>
			</Link>
		</li>
	));

	return (
		<>
			<nav className="nav">
				<div className="container nav__container">
					<div className="nav__logo-box">
						<figure className="nav__logo-1">
							<img
								className="nav__logo-image"
								src="singer-france.png"
								alt="Logo Singer France"
							/>
						</figure>
						<figure className="nav__logo-2">
							<img
								className="nav__logo-image"
								src="singer-france-text.png"
								alt="Logo Texte Singer France"
							/>
						</figure>
					</div>
					<ul className="section">{mappedLinks}</ul>
					<div className="trigger" title="Afficher le menu">
						<Icon icon={faBars} />
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navigation;
