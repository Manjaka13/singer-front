import React from "react";
import { useRouter } from "next/router";
import Page from "components/Page";

const Products = (): JSX.Element => {
	const router = useRouter();
	const { type } = router.query;

	return (
		<Page
			title={
				type == "tout"
					? "La liste de tous nos produits"
					: `Liste des machines de type: ${type}`
			}
			description="Consulter la liste exhaustive des machines proposées sur Singer France."
			image="/machine.png"
		>
			<p>Products: {type}</p>
		</Page>
	);
};

export default Products;
