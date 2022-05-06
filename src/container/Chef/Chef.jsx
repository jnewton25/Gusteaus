import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
	<div className="app__bg app__wrapper section__padding">
		<div className="app__wrapper_img app__wrapper_img.reverse">
			<img src={images.chef2} alt="chef" />
		</div>

		<div className="app__wrapper_info">
			<SubHeading title="Chef Auguste Gusteau" />
			<h1 className="headtext__cormorant">Anyone can cook!</h1>

			<div className="app__chef-content">
				<div className="app__chef-content_quote">
					<img src={images.quote} alt="quote" />
					<p className="p__opensans">
						What I say is true - Anyone can cook ... But only the
						fearless can be great.
					</p>
				</div>
				<p className="p__opensans">
					Good food is like music you can taste, color you can smell.
					There is excellence all around you, you only need to be
					aware to stop and savor it.
				</p>
			</div>
			<div className="app__chef-sign">
				<p>Auguste Gusteau</p>
				<p className="p__opensans">Owner & Chef de Cuisine</p>
				<img src={images.signgusteau} alt="sign" />
			</div>
		</div>
	</div>
);

export default Chef;
