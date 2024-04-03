import fields from "../fields.svelte";

export function renderStyleGood() {
	let white = "#ffffff";
	let whiteTrans = "rgba(255, 255, 255, 0.9)";
	let gray = "#f3f3f3";
	let orange = "#de470b";
	let lightBlue =  "#1d3f8c";
	let darkBlueTrans = "rgba(0, 47, 212, 0.9)";

	fields.place.textOptions = {
		top: 640, left: 1126,
		height: 60, width: 134,
		paddingX: 16,
		paddingY: 6,
		fontSize: 18,
		fontWeight: 500,
		textAlign: "center",
		bgColor: darkBlueTrans,
		textColor: white,
	};

	fields.time.textOptions = {
		top: 640, left: 20,
		height: 60, width: 134,
		paddingX: 16,
		paddingY: 6,
		fontSize: 18,
		fontWeight: 400,
		textAlign: "center",
		bgColor: darkBlueTrans,
		textColor: white,
	};

	fields.headline.textOptions = {
		top: 540, left: 160,
		height: "auto", width: "auto",
		paddingX: 15,
		paddingY: 2,
		fontSize: 24,
		fontWeight: 800,
		bgColor: orange,
		textColor: gray,
	};

	fields.body.textOptions = {
		top: 572, left: 160,
		height: "auto", width: 960,
		paddingX: 15,
		paddingY: 15,
		fontFamily: "Archivo",
		fontSize: 32,
		charSpacing: 0,
		fontWeight: 400,
		textAlign: "center",
		bgColor: whiteTrans,
		textColor: lightBlue,
	};

	fields.details.textOptions = {
		top: 640, left: 160,
		height: 60, width: 960,
		paddingX: 15,
		paddingY: 6,
		fontSize: 20,
		fontWeight: 600,
		bgColor: darkBlueTrans,
		textColor: white,
	};

	fields.images.styleImages = [
		{
			src: "/sun.svg",
			name: "Logo",
			options: {
				withBorder: false,
				position: {
					left: 42,
					top: 544,
				},
			},
		}
	];
}
