export function renderTextBox(field, options) {
	let canvas = field.builder.canvas;
	let text = field.fabObj.text;
	let bg = field.fabObj.bg;
	let group = field.fabObj.group;

	let paddingX = options.paddingX || 0;
	let paddingY = options.paddingY || 0;

	text.set({
		top: 0.8,
		left: 0,
		originX: "center",
		originY: "center",
		fill: options.textColor,
		fontFamily: options.fontFamily || "Archivo",
		fontSize: options.fontSize || 14,
		fontWeight: options.fontWeight || 400,
		charSpacing: options.charSpacing || 0,
		textAlign: options.textAlign || "left",
	});
	bg.set({
		top: 0,
		left: 0,
		originX: "center",
		originY: "center",
		fill: options.bgColor,
	});
	group.set({
		top: options.top,
		left: options.left,
	});

	function roundToEven(number) {
		let x =  2 * Math.round(number / 2);
		return x;
	}

	function setSize(options) {
		if ("textWidth" in options) {
			text.set("width", roundToEven(options.textWidth));
		}
		if ("textHeight" in options) {
			text.set("height", roundToEven(options.textHeight));
		}
		if ("boxWidth" in options) {
			bg.set("width", roundToEven(options.boxWidth));
			group.set("width", roundToEven(options.boxWidth));
			group.setCoords({width: roundToEven(options.boxWidth)});
		}
		if ("boxHeight" in options) {
			bg.set("height", roundToEven(options.boxHeight));
			group.set("height", roundToEven(options.boxHeight));
			group.setCoords({height: roundToEven(options.boxHeigh)});
		}
		canvas.requestRenderAll();
	}

	field.value.subscribe(() => {
		let textRect = text.getBoundingRect();
		if (options.width == "auto") {
			setSize({
				boxWidth: textRect.width + paddingX * 2,
			});
		} else {
			setSize({
				boxWidth: options.width,
				textWidth: options.width - paddingX * 2,
			});
		}
		if (options.height == "auto") {
			setSize({
				boxHeight: textRect.height + paddingY * 2,
			});
		} else {
			setSize({
				boxHeight: options.height,
				textHeight: options.height - paddingY * 2,
			});
		}
	});
}
