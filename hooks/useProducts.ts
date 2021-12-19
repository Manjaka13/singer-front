import React, { useState, useEffect } from "react";
import { IProduct } from "helpers/interface";
import {
	getMecanique,
	getElectronique,
	getBrodeuse,
	getSurjeteuse
} from "service/";

/*
	Gets list of all products under each type
*/

const useProducts = (type: string | string[]): Array<IProduct> => {
	const [produits, setProduits] = useState<Array<IProduct>>([]);

	useEffect(() => {
		switch(type) {
			case "machine-a-coudre-mecanique":
				getMecanique()
					.then((data: Array<IProduct>) => setProduits(data))
					.catch((e) => {
						console.error(e);
					});
				break;
			case "machine-a-coudre-electronique":
				getElectronique()
					.then((data: Array<IProduct>) => setProduits(data))
					.catch((e) => {
						console.error(e);
					});
				break;
			case "brodeuse":
				getBrodeuse()
					.then((data: Array<IProduct>) => setProduits(data))
					.catch((e) => {
						console.error(e);
					});
				break;
			default:
				getSurjeteuse()
					.then((data: Array<IProduct>) => setProduits(data))
					.catch((e) => {
						console.error(e);
					});
				break;
		}
	}, []);

	return produits;
};

export default useProducts;