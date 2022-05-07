import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
	<div className="app__specialMenu flex__center section__padding" id="menu">
		<div className="app__specialMenu-title">
			<SubHeading title="Pour Votre Considération" />
			<h1 className="headtext__cormorant">Le Plat du Jour</h1>
			<h3 className="headtext__cormorant_h3">(Today's Special)</h3>
		</div>

		<div className="app__specialMenu-menu">
			<div className="app__specialMenu-menu_wine flex__center">
				<p className="app__specialMenu-menu_heading">Wine & Beer</p>
				<div className="app__specialMenu_menu_items">
					{data.wines.map((wine, index) => (
						<MenuItem
							key={wine.title + index}
							title={wine.title}
							price={wine.price}
							tags={wine.tags}
						/>
					))}
				</div>
			</div>

			<div className="app__specialMenu-menu_img">
				<img src={images.menu} alt="menu img" />
			</div>

			<div className="app__specialMenu-menu_cocktails flex__center">
				<p className="app__specialMenu-menu_heading">
					Spécialité du Chef
				</p>
				<div className="app__specialMenu_menu_items">
					{data.specials.map((specials, index) => (
						<MenuItem
							key={specials.title + index}
							title={specials.title}
							price={specials.price}
							tags={specials.tags}
						/>
					))}
				</div>
			</div>
		</div>

		<div style={{ marginTop: "15px" }}>
			<button type="button" className="custom__button">
				View More
			</button>
		</div>
	</div>
);

export default SpecialMenu;
