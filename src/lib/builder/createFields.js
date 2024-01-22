import { TextField } from "./field";

export function createFields() {
	let fields = {};

	fields.width = new TextField({
		type: "number",
		name: "width",
		label: "Width",
		value: 1280,
	});

	fields.height = new TextField({
		type: "number",
		name: "height",
		label: "Height",
		value: 720,
	});

	fields.place = new TextField({
		type: "text",
		name: "place",
		label: "Place",
		value: "Some Place, Over There",
		enableVisible: true,
		visible: true,
	});

	fields.time = new TextField({
		type: "text",
		name: "time",
		label: "Time",
		value: "20:31 PM, UTC",
		enableVisible: true,
		visible: true,
	});

	fields.headline = new TextField({
		type: "text",
		name: "headline",
		label: "Headline",
		value: "BREAKING NEWS",
		enableVisible: true,
		visible: true,
	});

	fields.body = new TextField({
		type: "textarea",
		name: "body",
		label: "Body",
		value: "INSIDE SOURCE: SOMETHING IS HAPPENING RIGHT NOW",
		enableVisible: true,
		visible: true,
	});

	fields.details = new TextField({
		type: "text",
		name: "details",
		label: "Details",
		value: "",
		enableVisible: true,
		visible: true,
	});

	return fields;
}
