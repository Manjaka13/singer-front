import React from "react";
import Link from "next/link";
import { IDetailedProductProps } from "helpers/interface";

const DetailedProduct: React.FC<IDetailedProductProps> = ({ product }): JSX.Element => (
	<section className="detailed-product">
		<div className="container">
			<div className="diapo">
				<p>Product images diaporama</p>
			</div>
			<div className="info">
				<h2 className="title">EM9305</h2>
				<p className="description">Brodeuse EM9305, personnalisez tous vos projets de couture !</p>
				<div className="separator"></div>
				<ul className="characteristics">
					<li className="item">150 motifs de broderie</li>
					<li className="item">3 alphabets</li>
					<li className="item">Écran couleur tactile interactif pour sélectionner les motifs ou les polices, les déplacer, les agrandir ou les combiner</li>
					<li className="item">Logiciel gratuit à télécharger</li>
					<li className="item">Coupe fil automatique</li>
					<li className="item">Large cadre à broder : 240 x 150 mm</li>
					<li className="item">Détecteur de fils cassés</li>
					<li className="item">2 éclairages LED</li>
					<li className="item">Pied de biche « snap on R » sensitif : reconnaissance automatique des épaisseurs de tissu</li>
					<li className="item">Accès direct à la canette en cours de broderie</li>
				</ul>
				<Link href="#0">
					<a className="fiche" title="Voir la fiche du produit">Voir la fiche du produit</a>
				</Link>
			</div>
		</div>
	</section>
);

export default DetailedProduct;