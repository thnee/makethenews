import { renderTextBox } from "./renderTextBox";

export function renderTrueNews(builder) {
	let place = builder.fields.place;
	let time = builder.fields.time;
	let headline = builder.fields.headline;
	let body = builder.fields.body;
	let details = builder.fields.details;

	let white = "#ffffff";
	let black = "#000000";
	let gray = "#eeeeee";
	let red = "#a81208";

	renderTextBox(place, {
		top: 40, left: 40,
		height: "auto", width: "auto",
		paddingX: 16,
		paddingY: 2,
		fontSize: 18,
		fontWeight: 500,
		bgColor: gray,
		textColor: black,
	});

	renderTextBox(time, {
		top: 66, left: 40,
		height: "auto", width: "auto",
		paddingX: 16,
		paddingY: 2,
		fontSize: 18,
		fontWeight: 500,
		bgColor: red,
		textColor: white,
	});

	renderTextBox(headline, {
		top: 574, left: 40,
		height: "auto", width: "auto",
		paddingX: 15,
		paddingY: 2,
		fontSize: 24,
		fontWeight: 600,
		bgColor: red,
		textColor: white,
	});

	renderTextBox(body, {
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
	});

	renderTextBox(details, {
		top: 680, left: 40,
		height: "auto", width: 1200,
		paddingX: 15,
		paddingY: 2,
		fontSize: 20,
		fontWeight: 600,
		textAlign: "center",
		bgColor: red,
		textColor: white,
	});
}
