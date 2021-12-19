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
	type: string;
	title: string;
	description: string;
	details: Array<string>;
	promotion?: IPromotion;
	outstock?: boolean;
	children?: JSX.Element;
}

// Liste produit props
export interface IListeProduitProps {
	type: string | string[];
}

export interface ICardProductProps {
	product: IProduct;
}
