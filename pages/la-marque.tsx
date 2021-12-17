import React from "react";
import Page from "components/Page";
import Lamarque from "components/Lamarque";

/*
	Home page
*/

const Home = (): JSX.Element => {
	return (
		<Page
			title="La marque Singer France"
			description="C'est l'histoire d'une marque de machines à coudre devenue vite indispensable à un grand nombre de foyers en France."
			image="/cover/la-marque.jpg"
			active={0}
		>
			<Lamarque />
		</Page>
	);
};

export default Home;
