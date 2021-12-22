import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useProducts } from "hooks/";
import { IListeProduitProps } from "helpers/interface";
import CardProduct from "components/CardProduct";

const ListeProduit: React.FC<IListeProduitProps> = ({ type }): JSX.Element => {
	const produits = useProducts(type);

	console.log(produits);

	const mappedProduits = produits.map((item) => (
		<li className="liste-produits__item" key={uuidv4()}>
			<CardProduct product={item} />
		</li>
	));

	return (
		<section className="liste-produit">
			<div className="container">
				<div className="section-title">
					<div className="vertical-bar"></div>
					{type == "tout" && <h2 className="title">Liste de tous les produits</h2>}
					{type != "tout" && (
						<h2 className="title">
							Liste des {type.replace("-a-", " à ").replace("-", " ")}
						</h2>
					)}
				</div>
				<p className="section-paragraph">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
					cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>

				<ul
					className={
						`liste-produit__liste ${produits.length == 0 && 'liste-produit__liste--empty'}`
					}
				>
					{produits.length > 0 && mappedProduits}
				</ul>
			</div>
		</section>
	);
};

export default ListeProduit;
