import React from "react";
import Link from "next/link";
import { ICardProductProps } from "helpers/interface";

const CardProduct: React.FC<ICardProductProps> = ({ product }): JSX.Element => (
	<article className="card-product">
		<figure className="card-product__representation">
			<img className="card-product__image" src={product.photo ? product.photo[0] : "/machine.jpg"} alt="Machine" />
			<p className={`card-product__badge card-product__badge${product.outstock ? "--red" : (typeof(product.promotion.type) == "string" ? "--green" : "--hidden")}`}>
				{product.outstock ? "En rupture de stock" : (typeof(product.promotion.type) == "string" ? "En promotion" : "")}
			</p>
		</figure>
		<h3 className="card-product__title">{product.title}</h3>
		<p className="card-product__price">Produit ajouté le: 09/10/2021</p>
		<div className="card-product__separator"></div>
		<p className="card-product__description">{product.description}</p>
		<div className="card-product__discover-box">
			<Link href={`/details/${product.id}`} passHref>
				<a className="card-product__discover" title="Découvrir ce produit">
					Découvrir
				</a>
			</Link>
		</div>
	</article>
);

export default CardProduct;
