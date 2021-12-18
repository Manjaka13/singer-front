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

// Promotion interface
export interface IPromotion {
	type: number;
	name: string;
	value?: number;
}

// Product interface
export interface IProduct {
	id: string;
	title: string;
	price: number;
	description: string;
	promotion?: IPromotion;
	outstock?: boolean;
}