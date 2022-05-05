import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
	<div
		className="app__aboutus app__bg flex__center section__padding"
		id="about"
	>
		<div className="app__aboutus-overlay flex__center">
			<img src={images.G} alt="letter G" />
		</div>

		<div className="app__aboutus-content flex__center">
			<div className="app__aboutus-content_about">
				<h1 className="headtext__cormorant">About Us</h1>
				<img
					src={images.spoon}
					alt="about_spoon"
					className="spoon__img"
				/>
				<p className="p__opensans">
					Aute aliquip cillum et excepteur. Amet amet elit pariatur
					magna irure consectetur sint mollit cupidatat. Est eu
					consectetur pariatur proident enim amet quis elit.
				</p>
				<button type="button" className="custom__button">
					Know More
				</button>
			</div>

			<div className="app__aboutus-content_knife flex__center">
				<img src={images.gusteaus10} alt="about_knife" />
			</div>

			<div className="app__aboutus-content_history">
				<h1 className="headtext__cormorant">Our History</h1>
				<img
					src={images.spoon}
					alt="about_spoon"
					className="spoon__img"
				/>
				<p className="p__opensans">
					Aute aliquip cillum et excepteur. Amet amet elit pariatur
					magna irure consectetur sint mollit cupidatat. Est eu
					consectetur pariatur proident enim amet quis elit.
				</p>
				<button type="button" className="custom__button">
					Know More
				</button>
			</div>
		</div>
	</div>
);

export default AboutUs;
