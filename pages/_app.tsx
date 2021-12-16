import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "styles/index.scss";
import { ISingerFranceProps } from "helpers/interface";
import { config } from "@fortawesome/fontawesome-svg-core";

// Manually add fontawesome styles
config.autoAddCss = false;

const SingerFrance: React.FC<ISingerFranceProps> = ({
	Component,
	pageProps,
}): JSX.Element => (
	<Component {...pageProps} />
);

export default SingerFrance;
