import fields from "../fields.svelte";

export function renderStyleReal() {
	let white = "#ffffff";
	let black = "#000000";
	let gray = "#f3f3f3";
	let red =  "#ba261c";

	fields.place.textOptions = {
		top: 40, left: 40,
		height: "auto", width: "auto",
		paddingX: 16,
		paddingY: 2,
		fontSize: 18,
		fontWeight: 500,
		bgColor: gray,
		textColor: black,
	};

	fields.time.textOptions ={
		top: 66, left: 40,
		height: "auto", width: "auto",
		paddingX: 16,
		paddingY: 2,
		fontSize: 18,
		fontWeight: 500,
		bgColor: black,
		textColor: white,
	};

	fields.headline.textOptions = {
		top: 574, left: 40,
		height: "auto", width: "auto",
		paddingX: 15,
		paddingY: 2,
		fontSize: 24,
		fontWeight: 600,
		bgColor: red,
		textColor: gray,
	};

	fields.body.textOptions = {
		top: 606, left: 40,
		height: "auto", width: 1200,
		paddingX: 15,
		paddingY: 15,
		fontFamily: "Archivo Narrow",
		fontSize: 32,
		charSpacing: -30,
		fontWeight: 600,
		bgColor: gray,
		textColor: black,
	};

	fields.details.textOptions = {
		top: 680, left: 40,
		height: "auto", width: 1200,
		paddingX: 15,
		paddingY: 2,
		fontSize: 20,
		fontWeight: 100,
		bgColor: black,
		textColor: white,
	};
}
