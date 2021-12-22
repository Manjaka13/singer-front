import React from "react";
import { useRouter } from "next/router";
import Page from "components/Page";
import DetailedProduct from "components/DetailedProduct";
import Loading from "components/Loading";
import { useProducts } from "hooks/";

const Details = (): JSX.Element => {
	const router = useRouter();
	const { id } = router.query;
	const product = useProducts("brodeuse");

	return (
		<Page
			title={`Détails du produit: ${id}`}
			description="Visionnez en détails les spécificités du produit."
			image="/machine.png"
		>
			{product.length > 0 && <DetailedProduct product={product[0]} />}
			{product.length == 0 && 
				<div className="detailed-product container">
					<div className="loading-box">
						<Loading />
					</div>
				</div>
			}
		</Page>
	);
};

export default Details;
