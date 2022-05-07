import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
	<div className="app__footer section__padding">
		<FooterOverlay />
		<Newsletter />

		<div className="app__footer-links">
			<div className="app__footer-links_contact">
				<h1 className="app__footer-headtext">Contact Us</h1>
				<p className="p__opensans">
					189 Rue De L'Université, 75007 Paris, France
				</p>
				<p className="p__opensans">+33 1 42 72 25 76</p>
			</div>
			<div className="app__footer-links_logo">
				<img src={images.gusteaus} alt="footer logo" />
				<p className="p__opensans">
					"You must be imaginative, strong-hearted. You must try
					things that may not work, and you must not let anyone define
					your limits because of where you come from. Your only limit
					is your soul."
				</p>
				<img
					src={images.spoon}
					alt="spoon"
					className="spoon__img"
					style={{ marginTop: 15 }}
				/>
				<div className="app__footer-links_icons">
					<FiFacebook />
					<FiTwitter />
					<FiInstagram />
				</div>
			</div>
			<div className="app__footer-links_work">
				<h1 className="app__footer-headtext">Operation Hours</h1>
				<p className="p__opensans">Open Everday</p>
				<p className="p__opensans">Lunch 12 Pm - 2 Pm</p>
				<p className="p__opensans">Dinner 7:30 Pm - 9:30 Pm</p>
			</div>
		</div>
		<div className="footer__copyright">
			<p className="p__opensans">2022 Gusteaus. All Rights Reserved.</p>
		</div>
	</div>
);

export default Footer;
