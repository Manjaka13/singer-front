import React from "react";
import { useRouter } from "next/router";
import Page from "components/Page";

const Details = (): JSX.Element => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<Page
			title={`Détails du produit: ${id}`}
			description="Visionnez en détails les spécificités du produit."
			image="/machine.png"
		>
			<p>Details: {id}</p>
		</Page>
	);
};

export default Details;
