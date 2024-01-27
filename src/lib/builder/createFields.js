import { Field, StyleField, BgImageField, TextField, ImagesField } from "./field";

export function createFields() {
	let fields = {};

	fields.width = new Field({
		name: "width",
		label: "Width",
		fieldComp: "Size",
		value: 1280,
	});

	fields.height = new Field({
		name: "height",
		label: "Height",
		fieldComp: "Size",
		value: 720,
	});

	fields.bgColor = new Field({
		name: "bgColor",
		label: "Background color",
		fieldComp: "Color",
		value: "#113ed1",
	});

	fields.bgImage = new BgImageField({
		name: "bgImage",
		label: "Background image",
		fieldComp: "Image",
		defaultValue: "/bg.jpg",
		enableVisible: true,
		visible: true,
	});

	fields.style = new StyleField({
		name: "style",
		label: "Style",
		fieldComp: "Style",
		value: "real",
		options: [
			{
				name: "real",
				label: "REAL NEWS",
			},
			{
				name: "true",
				label: "TRUE NEWS",
			}
		],
	});

	fields.place = new TextField({
		name: "place",
		label: "Place",
		fieldComp: "Text",
		value: "Some Place, Over There",
		enableVisible: true,
		visible: true,
	});

	fields.time = new TextField({
		name: "time",
		label: "Time",
		fieldComp: "Text",
		value: "20:31 PM, UTC",
		enableVisible: true,
		visible: true,
	});

	fields.headline = new TextField({
		name: "headline",
		label: "Headline",
		fieldComp: "Text",
		value: "BREAKING NEWS",
		enableVisible: true,
		visible: true,
	});

	fields.body = new TextField({
		name: "body",
		label: "Body",
		fieldComp: "Text",
		textComp: "textarea",
		value: "INSIDE SOURCE: SOMETHING IS HAPPENING RIGHT NOW",
		enableVisible: true,
		visible: true,
	});

	fields.details = new TextField({
		name: "details",
		label: "Details",
		fieldComp: "Text",
		value: "",
		enableVisible: true,
		visible: true,
	});

	fields.images = new ImagesField({
		name: "images",
		label: "Images",
		fieldComp: "Images",
		value: "",
		enableVisible: false,
	});

	return fields;
}
