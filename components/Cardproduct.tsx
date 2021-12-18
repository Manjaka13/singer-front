import React from "react";
import Link from "next/link";
import { IProduct } from "helpers/interface";

const Cardproduct: React.FC<IProduct> = ({
	id,
	title,
	price,
	description,
	promotion,
	outstock,
}): JSX.Element => (
	<article className="card-product">
		<figure className="card-product__representation">
			<img className="card-product__image" src="/machine.jpg" alt="Machine" />
			<p
				className={`card-product__badge card-product__badge${
					outstock ? "--red" : promotion ? "--green" : "--hidden"
				}`}
			>
				{outstock ? "En rupture de stock" : promotion ? "En promotion" : ""}
			</p>
		</figure>
		<h3 className="card-product__title">{title}</h3>
		<p className="card-product__price">{price ? price.toFixed(2) : "???.??"} €</p>
		<div className="card-product__separator"></div>
		<p className="card-product__description">{description}</p>
		<div className="card-product__discover-box">
			<Link href={`/details/${id}`} passHref>
				<a className="card-product__discover" title="Découvrir ce produit">
					Découvrir
				</a>
			</Link>
		</div>
	</article>
);

export default Cardproduct;
