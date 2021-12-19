import React, { useState, useEffect } from "react";
import { IProduct } from "helpers/interface";
import { getMecanique } from "service/";

/*
	Gets list of all produts under the type: machine-a-coudre-mecanique
*/

const useMecanique = (): Array<IProduct> => {
	const [produits, setProduits] = useState<Array<IProduct>>([]);

	useEffect(() => {
		getMecanique()
			.then((data: Array<IProduct>) => {
				setProduits(data);
			})
			.catch((e) => {
				console.error(e);
			});
	}, []);

	return produits;
};

export default useMecanique;
