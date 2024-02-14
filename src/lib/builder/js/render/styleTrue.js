import fields from "../fields.svelte";

export function renderStyleTrue() {
	let white = "#ffffff";
	let black = "#000000";
	let gray = "#eeeeee";
	let red = "#a81208";

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

	fields.time.textOptions = {
		top: 66, left: 40,
		height: "auto", width: "auto",
		paddingX: 16,
		paddingY: 2,
		fontSize: 18,
		fontWeight: 500,
		bgColor: red,
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
		textColor: white,
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
		textAlign: "center",
		bgColor: gray,
		textColor: black,
	};

	fields.details.textOptions = {
		top: 680, left: 40,
		height: "auto", width: 1200,
		paddingX: 15,
		paddingY: 2,
		fontSize: 20,
		fontWeight: 600,
		textAlign: "center",
		bgColor: red,
		textColor: white,
	};
}
