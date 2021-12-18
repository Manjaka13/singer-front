import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";

library.add(faEye);

const Choixmachine = (): JSX.Element => {
	const typeMachine = [
		{
			name: "Machine à coudre mécanique",
			description: "Parcourir notre large catalogue de marques de machines à coudre totalement mécanique.",
			link: "/produits/machine-a-coudre-mécanique",
			image: "/types/machine mecanique.jpg"
		},
		{
			name: "Machine à coudre éléctronique",
			description: "Nous avons plusieurs marques de machines à coudres qui eux sont éléctroniques.",
			link: "/produits/machine-a-coudre-electronique",
			image: "/types/machine electronique.jpg"
		},
		{
			name: "Brodeuse",
			description: "Chez Singer, vous pouvez choisir parmi une large liste dans notre catalogue pour les brodeuses.",
			link: "/produits/brodeuse",
			image: "/types/brodeuse.jpg"
		},
		{
			name: "Surjeteuse",
			description: "Avec une grande collection de marques de surjeteuses vous trouverez à coup sûr votre bonheur.",
			link: "/produits/surjeteuse",
			image: "/types/surjeteuse.jpg"
		}
	];

	const mappedTypeMachine = typeMachine.map(item => (
		<li className="choixmachine__list-item" key={uuidv4()}>
			<img
				className="image"
				src={item.image}
				alt={item.name}
			/>
			<div className="name">
				<Link href={item.link} passHref>
					<a className="view" title="Voir la liste de ce produit">
						<Icon icon={faEye} /> Voir tout
					</a>
				</Link>
				<div className="content">
					<h3 className="type-name">{item.name}</h3>
					<div className="separator"></div>
					<p className="about">{item.description}</p>
				</div>
			</div>
		</li>
	));

	return (
		<section className="choix-machine">
			<div className="container">
				<div className="section-title">
					<div className="vertical-bar"></div>
					<h2 className="title">Quelle machine recherchez-vous ?</h2>
				</div>
				<p className="section-paragraph">
					Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
					consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
					amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
					sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
				</p>
				<ul className="choixmachine__list">
					{mappedTypeMachine}
				</ul>
			</div>
		</section>
	);
}

export default Choixmachine;
