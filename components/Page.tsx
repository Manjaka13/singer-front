import React from "react";
import Heading from "components/Heading";
import Navigation from "components/Navigation";
import Footer from "components/Footer";
import Copyright from "components/Copyright";
import Cardproduct from "components/Cardproduct";
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
			{/*<Cardproduct
				id="1d91c30b-b057-46dc-bcfb-e055f4d3d262"
				title="Featherweight"
				price={849}
				description="Cette machine est compacte et complète, elle est facile à transporter et possède aussi de nombreuses fonctionnalités."
			/>*/}
		</main>
		<Footer />
		<Copyright />
	</>
);

export default Page;
