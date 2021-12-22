import { useState, useEffect } from "react";
import { IProduct } from "helpers/interface";
import {
	getMecanique,
	getElectronique,
	getBrodeuse,
	getSurjeteuse,
} from "service/";

/*
	Gets list of all products under each type
*/

const useProducts = (type: string | string[]): Array<IProduct> => {
	const [produits, setProduits] = useState<Array<IProduct>>([]);

	useEffect(() => {
		let liste = [];
		setProduits([]);
		switch (type) {
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
			case "surjeteuse":
				getSurjeteuse()
					.then((data: Array<IProduct>) => setProduits(data))
					.catch((e) => {
						console.error(e);
					});
				break;
			case "tout":
				getMecanique()
					.then((data: Array<IProduct>) => { liste = liste.concat(data); })
					.then(() => getElectronique())
					.then((data: Array<IProduct>) => { liste = liste.concat(data); })
					.then(() => getBrodeuse())
					.then((data: Array<IProduct>) => { liste = liste.concat(data); })
					.then(() => getSurjeteuse())
					.then((data: Array<IProduct>) => { liste = liste.concat(data); })
					.then(() => setProduits(liste))
					.catch((e) => {
						console.error(e);
					});
				break;
		}
	}, [type]);

	return produits;
};

export default useProducts;
