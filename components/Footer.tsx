import React from "react";
import Link from "next/link";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faAddressCard,
	faPhone,
	faMapMarkerAlt,
	faEnvelope
} from "@fortawesome/free-solid-svg-icons";

// Load icons
library.add(
	faAddressCard,
	faPhone,
	faMapMarkerAlt,
	faEnvelope
);

const Footer = (): JSX.Element => (
	<footer className="footer">
		<div className="container">
			<div className="footer__item">
				<h2 className="title">Nous connaître</h2>
				<div className="separator"></div>
				<ul className="list">
					<li className="list-item">
						<Link href="/la-marque" passHref><a className="link" title="Voir">Notre marque</a></Link>
					</li>
					<li className="list-item">
						<Link href="/devenir-concessionnaire" passHref><a className="link" title="Voir">Devenir concessionnaire</a></Link>
					</li>
					<li className="list-item">
						<Link href="#0" passHref><a className="link" title="Voir">Carrière</a></Link>
					</li>
					<li className="list-item"><Link href="#0" passHref><a className="link" title="Voir">Foire aux questions</a></Link>
					</li>
				</ul>
			</div>
			<div id="contacts" className="footer__item">
				<h2 className="title">Besoin d\'aide ?</h2>
				<div className="separator"></div>
				<ul className="list">
					<li className="list-item">
						<span className="link" title="Voir"><Icon icon={faAddressCard} /> contact@singerfrance.fr</span>
					</li>
					<li className="list-item">
						<span className="link" title="Voir"><Icon icon={faPhone} /> +33 67 127 891 12</span>
					</li>
					<li className="list-item">
						<span className="link" title="Voir"><Icon icon={faPhone} /> +33 06 451 121 99</span>
					</li>
					<li className="list-item">
						<span className="link" title="Voir"><Icon icon={faMapMarkerAlt} /> 12C 20e, Paris, France</span>
					</li>
				</ul>
			</div>
			<div className="footer__item">
				<h2 className="title">Newsletter</h2>
				<div className="separator"></div>
				<p className="text">Pour souscrire à notre newsletter veuillez indiquer votre e-mail. Nous promettons de ne pas envoyer de publicités invasives.</p>
				<form className="form">
					<input className="input" type="email" placeholder="Entrer votre e-mail" required />
					<button className="submit" type="submit"><Icon icon={faEnvelope} /></button>
				</form>
			</div>
		</div>
		<div className="container about">
			<p className="about-text">Singer, la marque de référence en matière de couture : 165 ans de savoir-faire et de notoriété grâce à la qualité, la technologie et la longévité de ses machines à coudre. Notre marque propose aujourd’hui une large gamme de machines à coudre, brodeuses, surjeteuses et accessoires couture.</p>
			<p className="about-text">Singer bénéficie surtout d’une organisation constituée de professionnels au service de la créativité et du confort de leurs utilisatrices couvrant la quasi-totalité du territoire français. Conseils, démonstrations, formations ou encore cours de couture sont autant d’atouts qui participent à la qualité du service de l’enseigne.</p>
			<p className="about-text">Imaginez, créez, recyclez, customisez sans limite avec les machines à coudre SINGER : « Elles ont la technique, vous avez du talent ! »</p>
		</div>
	</footer>
);

export default Footer;