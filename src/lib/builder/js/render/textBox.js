import { fabric } from "fabric";
import { canvas } from "../../components/Builder.svelte";

export function createTextBox(field) {
	let text = new fabric.Text("");
	let bg = new fabric.Rect();
	let group = new fabric.Group([bg, text]);

	field.textObjects = {text, bg, group};
	canvas.add(group);

	renderTextBoxText(field);
	renderTextBoxColor(field);
	renderTextBoxVisible(field);
	renderTextBoxPosition(field);
	renderTextBoxSize(field);
	canvas.requestRenderAll();
}

export function renderTextBoxStyle(field) {
	renderTextBoxColor(field);
	renderTextBoxPosition(field);
	renderTextBoxSize(field);
	canvas.requestRenderAll();
}

export function renderTextBox(field) {
	renderTextBoxText(field);
	renderTextBoxColor(field);
	renderTextBoxVisible(field);
	renderTextBoxSize(field);
	canvas.requestRenderAll();
}

export function renderTextBoxText(field) {
	let {text} = field.textObjects;
	text.text = field.value;
}

export function renderTextBoxVisible(field) {
	let {group} = field.textObjects;
	group.visible = field.visible;
}

export function renderTextBoxPosition(field) {
	let options = field.textOptions || {};
	let {group} = field.textObjects;

	options.paddingX = options.paddingX || 0;
	options.padddingY = options.paddingY || 0;

	group.set({
		top: options.top,
		left: options.left,
	});
	group.setCoords({
		top: options.top,
		left: options.left,
	});
}

export function renderTextBoxColor(field) {
	let options = field.textOptions || {};
	let {text, bg} = field.textObjects;

	text.set({
		fill: options.textColor,
	});
	bg.set({
		fill: options.bgColor,
	});
}

export function renderTextBoxSize(field) {
	let options = field.textOptions || {};
	let {text, bg, group} = field.textObjects;

	options.paddingX = options.paddingX || 0;
	options.padddingY = options.paddingY || 0;

	text.set({
		top: 0.8,
		left: 0,
		originX: "center",
		originY: "center",
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
	});

	function roundToEven(number) {
		let x =  2 * Math.round(number / 2);
		return x;
	}

	function setSize(options) {
		if ("textWidth" in options) {
			let width = roundToEven(options.textWidth);
			text.set("width", width);
		}
		if ("textHeight" in options) {
			let height = roundToEven(options.textHeight);
			text.set("height", height);
		}
		if ("boxWidth" in options) {
			let width = roundToEven(options.boxWidth);
			bg.set("width", width);
			group.set("width", width);
			group.setCoords({width: width});
		}
		if ("boxHeight" in options) {
			let height = roundToEven(options.boxHeight);
			bg.set("height", height);
			group.set("height", height);
			group.setCoords({height: height});
		}
	}

	let textRect = text.getBoundingRect();
	if (options.width == "auto") {
		setSize({
			boxWidth: textRect.width + options.paddingX * 2,
		});
	} else {
		setSize({
			boxWidth: options.width,
			textWidth: options.width - options.paddingX * 2,
		});
	}
	if (options.height == "auto") {
		setSize({
			boxHeight: textRect.height + options.paddingY * 2,
		});
	} else {
		setSize({
			boxHeight: options.height,
			textHeight: options.height - options.paddingY * 2,
		});
	}
}
