import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
	<div className="app__header app__wrapper section__padding" id="home">
		<div className="app__wrapper_info">
			<SubHeading title="Voir le menu" />
			<h1 className="app__header-h1">Authentic dishes to savor</h1>
			<p className="p__opensans" style={{ margin: "2rem 0" }}>
				Proident ex veniam excepteur sint voluptate esse esse laboris
				nisi. Adipisicing enim reprehenderit dolore anim. Incididunt
				pariatur non tempor mollit aliqua consequat.
			</p>
			<button type="button" className="custom__button">
				Explore Menu
			</button>
		</div>

		<div className="app__wrapper_img">
			<img src={images.welcome} alt="header img" />
		</div>
	</div>
);

export default Header;
