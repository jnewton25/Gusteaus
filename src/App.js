import React from "react";

import {
	AboutUs,
	Chef,
	FindUs,
	Footer,
	Gallery,
	Header,
	Intro,
	Awards,
	SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
	<div>
		<Navbar />
		<Header />
		<AboutUs />
		<SpecialMenu />
		<Chef />
		<Intro />
		<Awards />
		<Gallery />
		<FindUs />
		<Footer />
	</div>
);

export default App;
