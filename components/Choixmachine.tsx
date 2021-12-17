import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";

library.add(faEye);

const Choixmachine = (): JSX.Element => (
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
				<li className="choixmachine__list-item">
					<img
						className="image"
						src="/types/machine mecanique.jpg"
						alt="Machine à coudre mécanique"
					/>
					<div className="name">
						<button className="view">
							<Icon icon={faEye} /> Voir tout
						</button>
						<div className="content">
							<h3 className="type-name">Machine à coudre mécanique</h3>
							<div className="separator"></div>
							<p className="about">
								Parcourir notre large catalogue de marques de machines à coudre
								totalement mécanique.
							</p>
						</div>
					</div>
				</li>
				<li className="choixmachine__list-item">
					<img
						className="image"
						src="/types/machine electronique.jpg"
						alt="Machine à coudre mécanique"
					/>
					<div className="name">
						<button className="view">
							<Icon icon={faEye} /> Voir tout
						</button>
						<div className="content">
							<h3 className="type-name">Machine à coudre éléctronique</h3>
							<div className="separator"></div>
							<p className="about">
								Nous avons plusieurs marques de machines à coudres qui eux sont
								éléctroniques.
							</p>
						</div>
					</div>
				</li>
				<li className="choixmachine__list-item">
					<img
						className="image"
						src="/types/brodeuse.jpg"
						alt="Machine à coudre mécanique"
					/>
					<div className="name">
						<button className="view">
							<Icon icon={faEye} /> Voir tout
						</button>
						<div className="content">
							<h3 className="type-name">Brodeuse</h3>
							<div className="separator"></div>
							<p className="about">
								Chez Singer, vous pouvez choisir parmi une large liste dans notre
								catalogue pour les brodeuses.
							</p>
						</div>
					</div>
				</li>
				<li className="choixmachine__list-item">
					<img
						className="image"
						src="/types/surjeteuse.jpg"
						alt="Machine à coudre mécanique"
					/>
					<div className="name">
						<button className="view">
							<Icon icon={faEye} /> Voir tout
						</button>
						<div className="content">
							<h3 className="type-name">Surjeteuse</h3>
							<div className="separator"></div>
							<p className="about">
								Avec une grande collection de marques de surjeteuses vous trouverez à
								coup sûr votre bonheur.
							</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</section>
);

export default Choixmachine;
