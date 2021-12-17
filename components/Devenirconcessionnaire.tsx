import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faBriefcase,
	faLightbulb,
	faChartLine,
	faCheckCircle,
	faIdCard,
	faEnvelope,
	faPhone,
	faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(
	faBriefcase,
	faLightbulb,
	faChartLine,
	faCheckCircle,
	faIdCard,
	faEnvelope,
	faPhone,
	faMapMarkerAlt
);

const Devenirconcessionnaire = (): JSX.Element => (
	<section className="concessionnaire">
		<div className="container">
			<div className="section-title">
				<div className="vertical-bar"></div>
				<h2 className="title">Devenir concessionnaire Singer ?</h2>
			</div>
			<p className="section-paragraph">
				Vous souhaitez devenir concessionnaire SINGER ? Retrouvez sur cette page les
				coordonnées de votre principal interlocuteur qui vous aidera dans vos
				démarches et vous fera bénéficier de conseils avisés.
			</p>
			<ul className="concessionnaire__list">
				<li className="concessionnaire__item">
					<div className="overlay">
						<div className="icon-box">
							<Icon className="icon" icon={faBriefcase} />
						</div>
						<div className="separator"></div>
						<p className="text">
							Vous donnez un sens à votre vie, nous avons le sens de l’expérience.
						</p>
					</div>
				</li>
				<li className="concessionnaire__item">
					<div className="overlay">
						<div className="icon-box">
							<Icon className="icon" icon={faLightbulb} />
						</div>
						<div className="separator"></div>
						<p className="text">
							Vous avez les sens en éveil, nous avons le sens de l’innovation.
						</p>
					</div>
				</li>
				<li className="concessionnaire__item">
					<div className="overlay">
						<div className="icon-box">
							<Icon className="icon" icon={faChartLine} />
						</div>
						<div className="separator"></div>
						<p className="text">
							Vous avez le sens de la réussite, nous allons dans le sens de l’avenir.{" "}
						</p>
					</div>
				</li>
			</ul>
			<div className="group">
				<h3 className="mini-title">
					<Icon icon={faCheckCircle} /> Vous donnez un sens à votre vie, nous avons
					le sens de l’expérience.
				</h3>
				<p className="description">
					Vous avez choisi SINGER pour sa notoriété. Née aux Etats-Unis il y a plus
					de 160 ans, l’entreprise SINGER, se révèle à l’exposition universelle de
					Paris en 1855 et installe une structure en France en 1870. Depuis SINGER a
					conquis des professionnels et amateurs de la couture à chaque génération.
					SINGER est connue par 95% des femmes de 25 à 64 ans. SINGER est apprécié
					pour ses produits haut de gamme et dispose d’une force de vente efficace en
					France : 110 concessionnaires disposant de 145 points de vente et de
					nombreux points relais. Le réseau ainsi formé est la clé de voûte de la
					stratégie commerciale basée sur le service de proximité.
				</p>
			</div>
			<div className="group">
				<h3 className="mini-title">
					<Icon icon={faCheckCircle} /> Vous avez les sens en éveil, nous avons le
					sens de l’innovation.
				</h3>
				<p className="description">
					Depuis toujours, Singer, leader de la machine à coudre, innove pour
					répondre aux attentes de sa fidèle clientèle. En plus de l’univers couture,
					Singer propose des produits de qualité dans le domaine du repassage et du
					nettoyage, et aussi d’autres produits d’électroménager liés à l’univers de
					la maison. Singer propose des produits à forte valeur ajoutée, bénéficiant
					de l’expérience d’un réseau professionnel afin de satisfaire le
					consommateur.
				</p>
			</div>
			<div className="group">
				<h3 className="mini-title">
					<Icon icon={faCheckCircle} /> Vous avez le sens de la réussite, nous allons
					dans le sens de l’avenir.{" "}
				</h3>
				<p className="description">
					Vous bénéficierez de l’expérience de nos équipes commerciales pour vous
					permettre de définir la meilleure implantation possible, en tenant compte
					de votre projet. Nous vous aiderons dans l’établissement de votre plan
					d’affaires, dans la recherche de fournisseurs complémentaires, qui souvent
					ont des accords de partenariat avec nous, dans la recherche de
					l’emplacement adapté, dans l’aménagement de votre magasin. Vous pourrez
					compter sur nous. Dès le départ de votre projet, vous serez formé par nos
					collaborateurs, tant pour la connaissance des produits que pour leurs
					démonstrations, mais aussi par une équipe dédiée pour la maîtrise des
					techniques de ventes.
				</p>
			</div>
			<div className="concessionnaire__contact">
				<ul className="item">
					<li className="name">
						<Icon icon={faIdCard} /> Philippe LERUTH
					</li>
					<li>
						<a className="link" href="#0" title="Contacter">
							<Icon icon={faEnvelope} /> philippe.leruth@singer-distrib.com
						</a>
					</li>
				</ul>
				<ul className="item">
					<li className="name">
						<Icon icon={faIdCard} /> Anna RAMBAUD
					</li>
					<li>
						<a className="link" href="#0" title="Contacter">
							<Icon icon={faEnvelope} /> anna.rambaud@singer-distrib.com
						</a>
					</li>
					<li className="contact">
						<Icon icon={faPhone} /> 01 41 91 65 15
					</li>
				</ul>
				<ul className="item">
					<li className="name">
						<Icon icon={faIdCard} /> Fabien FOURNOL
					</li>
					<li>
						<a className="link" href="#0" title="Contacter">
							<Icon icon={faEnvelope} /> fabien.fournol@singer-distrib.com
						</a>
					</li>
					<li className="contact">
						<Icon icon={faPhone} /> 06 75 65 40 83
					</li>
				</ul>
				<ul className="item">
					<li className="name">Envoyez vos dossiers de candidature à</li>
					<li className="contact">
						<Icon icon={faMapMarkerAlt} /> Singer France 27-31 rue d’Arras 92022
						NANTERRE
					</li>
				</ul>
			</div>
		</div>
	</section>
);

export default Devenirconcessionnaire;
