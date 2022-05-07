import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
	<div className="app__bg app__wrapper section__padding" id="contact">
		<div className="app__wrapper_info">
			<SubHeading title="Contact" />
			<h1
				className="headtext__cormorant"
				style={{ marginBottom: "3rem" }}
			>
				Find Us
			</h1>
			<div className="app__wrapper-content">
				<p className="p__opensans" style={{ marginBottom: "3rem" }}>
					20 Rue Saint-Martin, 75004 Paris, France
				</p>
				<p
					className="p__cormorant"
					style={{ color: "#DCCA87", margin: "2rem 0" }}
				>
					Hours
				</p>
				<p className="p__opensans">Open Everday</p>
				<p className="p__opensans">Lunch 12 pm - 2 pm</p>
				<p className="p__opensans">Dinner 7.30 pm - 9:30 pm</p>
			</div>
			<button className="custom__button" style={{ marginTop: "2rem" }}>
				Visit Us
			</button>
		</div>
		<div className="app__wrapper_img">
			<img src={images.findus} alt="find us" />
		</div>
	</div>
);

export default FindUs;
