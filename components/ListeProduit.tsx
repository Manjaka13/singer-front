import React from "react";
import { useMecanique } from "hooks/";
import { IListeProduitProps } from "helpers/interface";

const ListeProduit: React.FC<IListeProduitProps> = ({type}): JSX.Element => {
	const produits = useMecanique();

	console.log(produits);

	return (
		<section className="liste-produit">
			<div className="container">
				<div className="section-title">
					<div className="vertical-bar"></div>
					<h2 className="title">Liste des produits</h2>
				</div>
				<p className="section-paragraph">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</section>
	)
};

export default ListeProduit;