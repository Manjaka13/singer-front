import React from "react";
import Page from "components/Page";
import Choixmachine from "components/Choixmachine";

/*
	Home page
*/

const Home = (): JSX.Element => {
	return (
		<Page
			title="Les livres d'Henri Potier"
			description="Parcourez la liste des livres d'Henri Potier à prix abordables."
			image="cover.png"
			active={0}
		>
			<Choixmachine />
		</Page>
	);
};

export default Home;
