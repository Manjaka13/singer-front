import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp, faDolly, faMailBulk } from "@fortawesome/free-solid-svg-icons";

library.add(faThumbsUp, faDolly, faMailBulk);

const Lamarque = (): JSX.Element => (
	<section className="lamarque">
		<div className="container">
    		<div className="section-title">
    			<div className="vertical-bar"></div>
    			<h2 className="title">Le mot du Président de SINGER France</h2>
    		</div>
    		<p className="section-paragraph">L’émergence des loisirs créatifs au sein de notre société est un phénomène que nous constatons depuis plusieurs années. Il prend constamment de l’ampleur et séduit toujours plus d’amateurs. De nombreux reportages dans la presse classique et télévisée sont consacrés à ce nouveau mouvement, les salons spécialisés, tel le salon « création et savoir-faire », le salon « l’aiguille en fête » connaissent une fréquentation exponentielle. Les blogs ou les livres dédiés à la couture rencontrent également un franc succès.</p>
    		<p className="section-paragraph">Parmi ces loisirs créatifs, la couture occupe une place importante. Pour de nombreux novices, elle suscite de l’intérêt, attire la curiosité, donne l’envie…</p>

    		<blockquote className="quote">
		        Dans un contexte économique difficile, la machine à coudre est également idéale pour confectionner des vêtements à moindre coût et très « stylés ».
			    <footer>
			        <cite>
			            Philippe LERUTH
			        </cite>
			    </footer>
		    </blockquote>

		    <p className="section-paragraph">La mode et les tendances ont une emprise, parfois inconsciente sur chacun d’entre nous, or nous souhaitons autant les suivre que s’en distinguer. La machine à coudre et votre talent peuvent vous permettre de réaliser ce compromis. Singer est la marque de référence du marché, elle existe depuis 1851, et jouit d’une très grande notoriété, et d’une image de qualité, confortée par l’extrême longévité de ses machines.</p>
		    <p className="section-paragraph">Une image rassurante avec un certain affect, souvent liée à notre grand-mère. Singer a toujours été le précurseur de l’évolution technique des machines à coudre, il propose aujourd’hui une gamme très large de machines à coudre, mécaniques et électroniques, de surjeteuses, et de machine à broder pilotée directement par ordinateur, ainsi que tous les produits accessoires, (repassage, consommables, etc.) Des produits modernes qui vous permettront de développer vos talents et votre créativité de manière très efficace.</p>
		    <p className="section-paragraph">Singer distribue ses produits d’entrée de gamme dans l’ensemble de la grande distribution, et dispose aussi d’un réseau de 200 points de vente SINGER répartis sur toute la France qui proposent une gamme complète, et vous permettent de disposer de l’ensemble des services et des produits liés à votre passion, la couture….</p>

    		<h3 className="engagement">Nos engagements</h3>
    		<div className="representation">
    			<a className="representation__item" href="#expertise" title="Consulter">
    				<Icon className="icon" icon={faThumbsUp} />
    				<p className="text">L'Expertise</p>
    			</a>
    			<div className="linking">
    				<div className="left"><div className="inner"></div></div>
    				<div className="mid"></div>
    				<div className="right"><div className="inner"></div></div>
    			</div>
    			<a className="representation__item" href="#service" title="Consulter">
    				<Icon className="icon" icon={faDolly} />
    				<p className="text">Le Service</p>
    			</a>
    			<div className="linking">
    				<div className="left"><div className="inner"></div></div>
    				<div className="mid"></div>
    				<div className="right"><div className="inner"></div></div>
    			</div>
    			<a className="representation__item" href="#apres-vente" title="Consulter">
    				<Icon className="icon" icon={faMailBulk} />
    				<p className="text">Après-Vente</p>
    			</a>
    		</div>
    		
    		<div id="expertise" className="lamarque__item">
    			<h3 className="mini-title">1 – L’Expertise</h3>
    			<div className="box">
	    			<p className="paragraph">Depuis 1851, le nom Singer est synonyme de couture. L’esprit de conception pratique et l’innovation créative qui ont caractérisé l’entreprise à ses débuts se poursuivent et nous continuons à développer des produits adaptés à chaque niveau de couture et style de couturière. A travers une gamme de machines à coudre mécaniques, électroniques, brodeuses et surjeteuses/recouvreuses, Singer propose la machine qui correspond aux envies et aux besoins de chacun.</p>
	    			<p className="paragraph">Le leadership de <span className="bold">SINGER ®</span> dans l’industrie perdure aujourd’hui, en raison de notre engagement permanent envers la qualité, la fiabilité, l’innovation et le service.</p>
					<p className="paragraph"><span className="bold">Savoir-faire – Satisfaction – Service – Sincérité</span> : un leitmotiv décliné en Quatre « S » pour finalement n’en faire plus qu’un, celui de SINGER !</p>
				</div>
    		</div>

    		<div id="service" className="lamarque__item">
    			<h3 className="mini-title">2 – Le Service</h3>
	    			<div className="box">
	    			<p className="paragraph">Parce que Singer est toujours dans l’inconscient collectif, l’accueil et le sourire des représentants de la marque SINGER sont une habitude contribuant à l’atmosphère conviviale de ses points de vente. SINGER a développé une gamme complète de machines à coudre pour convenir tant aux débutantes, rassurées par la qualité SINGER, qu’aux couturières confirmées à la recherche de produits sophistiqués offrant plus de confort et de créativité.</p>
	    			<p className="paragraph bold">Dans les magasins Singer France, vous trouverez :</p>
	    			<ul className="list">
	    				<li className="list__item">Des conseils & démonstrations</li>
	    				<li className="list__item">Des formations sur des machines spécifiquess</li>
	    				<li className="list__item">Des ateliers de couture assurés par des professionnels</li>
	    				<li className="list__item">De la mercerie</li>
	    				<li className="list__item">Un service d’entretien & de réparation de machines à coudre toutes marques</li>
	    			</ul>
	    		</div>
    		</div>

    		<div id="apres-vente" className="lamarque__item">
    			<h3 className="mini-title">3 – Le Service Après-Vente</h3>
    			<div className="box">
	    			<p className="paragraph">160 années d’expérience, une très grande spécialisation de ses produits et de leur technologie confèrent à la marque SINGER l’image rassurante d’une organisation constituée de professionnels au service de leurs utilisatrices.</p>
	    			<p className="paragraph bold">Un réseau de points de vente partout en France qui assure le service après vente de tous les produits Singer :</p>
	    			<p className="paragraph">Dans tous les points de ventes Singer, vous pouvez faire entretenir ou réparer votre machine à coudre Singer et autres marques également. Vérification, entretien, réparation sur devis.</p>
	    			<p className="paragraph">Grâce à ses nombreux points de vente et ses points relais, l’enseigne dispose d’un large réseau couvrant la quasi-totalité du territoire français. Pour contacter le service après-vente le plus proche de chez vous, veuillez vous rendre dans le magasin SINGER le plus proche de chez vous ou téléphonez au <span className="bold">01 41 91 65 19</span>.</p>
	    			<p className="paragraph bold">Un centre SAV national Singer France :</p>
	    			<p className="paragraph">C’est un véritable centre d’expertise et de formations, dirigé par des professionnels. Ce centre se situe au <span className="bold">27/31, rue d’Arras, 92022 Nanterre Cedex</span>, tel : <span className="bold">01 41 91 65 65</span>. Ce centre peut prendre en charge les vérifications, l’entretien et les réparations des produits Singer ainsi que toutes autre marques de machines à coudre.</p>
	    			<p className="paragraph">Singer s’engage à réparer vos produits et augmenter la durabilité de vos produits permettant de participer activement à la protection de l’environnent et éviter le gaspillage.</p>
    			</div>
    		</div>

    		<h3 className="partner-title">Nos partenaires</h3>
    		<img className="partner-image" src="/misc/partners.jpg" alt="Partenaires Singer" />
		</div>
	</section>
);

export default Lamarque;