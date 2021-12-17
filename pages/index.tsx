import React from "react";
import Page from "components/Page";
import Choixmachine from "components/Choixmachine";

/*
	Home page
*/

const Home = (): JSX.Element => {
	return (
		<Page
			title="Acheter une machine à coudre Singer France"
			description="Achetez des produits Singer France ou profitez de divers services."
			image="cover.png"
			active={0}
		>
			<Choixmachine />
		</Page>
	);
};

export default Home;
