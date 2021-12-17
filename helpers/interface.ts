/*
	All typescript interfaces
*/

// App props
export interface ISingerFranceProps {
	Component: React.ComponentClass;
	pageProps?: Record<string, unknown>;
}

// Heading component props
export interface IHeadingProps {
	title?: string;
	image?: string;
	children?: string;
}

// Page component props
export interface IPageProps {
	title?: string;
	image?: string;
	description?: string;
	children?: JSX.Element;
}