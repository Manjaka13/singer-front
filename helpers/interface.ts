/*
	All typescript interfaces
*/

import { IconProp } from "@fortawesome/fontawesome-svg-core";

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
	active?: number;
}

// Page component props
export interface IPageProps {
	title?: string;
	image?: string;
	description?: string;
	children?: JSX.Element;
	active?: number;
}

// Navigation component props
export interface INavigationProps {
	active: number;
}
