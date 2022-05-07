import images from "./images";

const wines = [
	{
		title: "Chapel Hill Shiraz",
		price: "$56",
		tags: "FR | Bottle",
	},
	{
		title: "Château d'Issan",
		price: "$59",
		tags: "FR | Bottle",
	},
	{
		title: "Charmes-Chambertin",
		price: "$44",
		tags: "FR | 750 ml",
	},
	{
		title: "Rhino Pale Ale",
		price: "$31",
		tags: "FR | 750 ml",
	},
	{
		title: "Cuvée Des Jonquilles",
		price: "$26",
		tags: "FR | 750 ml",
	},
];

const cocktails = [
	{
		title: "Aperol Sprtiz",
		price: "$20",
		tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
	},
	{
		title: "Dark 'N' Stormy",
		price: "$16",
		tags: "Dark rum | Ginger beer | Slice of lime",
	},
	{
		title: "Daiquiri",
		price: "$10",
		tags: "Rum | Citrus juice | Sugar",
	},
	{
		title: "Old Fashioned",
		price: "$31",
		tags: "Bourbon | Brown sugar | Angostura Bitters",
	},
	{
		title: "Negroni",
		price: "$26",
		tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
	},
];

const awards = [
	{
		imgUrl: images.award02,
		title: "Bib Gourmond",
		subtitle: "Lorem ipsum dolor sit amet, consectetur.",
	},
	{
		imgUrl: images.award01,
		title: "Rising Star",
		subtitle: "Lorem ipsum dolor sit amet, consectetur.",
	},
	{
		imgUrl: images.award05,
		title: "AA Hospitality",
		subtitle: "Lorem ipsum dolor sit amet, consectetur.",
	},
	{
		imgUrl: images.award03,
		title: "Outstanding Chef",
		subtitle: "Lorem ipsum dolor sit amet, consectetur.",
	},
];

const specials = [
	{
		title: "Remy's Soup",
		price: "$28",
		tags: "Hors D'Oeuvre | Chef Remy",
	},
	{
		title: "Quiche Lorraine",
		price: "$33",
		tags: "Main | Chef Colette",
	},
	{
		title: "Marinated Smoke Salmon",
		price: "$24",
		tags: "Hors D'Oeuvre | Chef Horst",
	},
	{
		title: "Home-made Cassoulet",
		price: "$38",
		tags: "Main | Chef Lalo",
	},
	{
		title: "Organic Tigre Calf's Head",
		price: "$34",
		tags: "Main | Chef Larousse",
	},
];

export default { wines, cocktails, awards, specials };
