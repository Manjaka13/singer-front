import React from "react";
import Page from "components/Page";
import Notfound from "components/Notfound";

/*
	Home page
*/

const Home = (): JSX.Element => {
	return (
		<Page
			title="404 Introuvable"
			description="Oups, il semblerait qu'il y ait un problème."
			image="/cover/404.jpg"
		>
			<Notfound />
		</Page>
	);
};

export default Home;
