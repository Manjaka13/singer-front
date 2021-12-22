import React from "react";
import Heading from "components/Heading";
import Navigation from "components/Navigation";
import Footer from "components/Footer";
import Copyright from "components/Copyright";
import Loading from "components/Loading";
import { IPageProps } from "helpers/interface";

/*
	Page component
	----------------
	@title: page title
	@image: page representation
	@description: page description
	@children: page content
*/

const Page: React.FC<IPageProps> = ({
	title,
	image,
	description,
	children,
}): JSX.Element => (
	<>
		<Heading title={title} image={image}>
			{description}
		</Heading>
		<main>
			<Navigation />
			{children}
		</main>
		<Footer />
		<Copyright />
	</>
);

export default Page;
