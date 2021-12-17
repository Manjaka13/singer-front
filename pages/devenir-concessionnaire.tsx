import React from "react";
import Page from "components/Page";
import Devenirconcessionnaire from "components/Devenirconcessionnaire";

/*
	Home page
*/

const Home = (): JSX.Element => {
	return (
		<Page
			title="Devenir concessionnaire Singer France"
			description="Découvrez comment devenir concesssionnaire Singer, nous vous asssistons dans vos démarches."
			image="/cover/devenir-concessionnaire.jpg"
		>
			<Devenirconcessionnaire />
		</Page>
	);
};

export default Home;
