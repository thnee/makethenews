import { createField, createTextField, createImagesField } from "./field";
import {
	renderStyle,
	renderStyleReal, renderStyleTrue, renderStyleGood,
	renderWidth, renderHeight, renderBgColor, renderBgImage,
} from "./render";

let fields = $state({});

fields.style = createField({
	name: "Style",
	enableVisible: false,
	component: "Select",
	startValue: "real",
	options: [
		{
			value: "real",
			label: "REAL NEWS",
			renderer: renderStyleReal,
		},
		{
			value: "true",
			label: "TRUE NEWS",
			renderer: renderStyleTrue,
		},
		{
			value: "good",
			label: "GOOD NEWS",
			renderer: renderStyleGood,
		}
	],
	onInit: renderStyle,
	onInput: renderStyle,
});

fields.width = createField({
	name: "Width",
	enableVisible: false,
	component: "Text",
	startValue: 1280,
	onInit: renderWidth,
	onInput: renderWidth,
});

fields.height = createField({
	name: "Height",
	enableVisible: false,
	component: "Text",
	startValue: 720,
	onInit: renderHeight,
	onInput: renderHeight,
});

fields.bgColor = createField({
	name: "Background color",
	enableVisible: false,
	component: "Color",
	startValue: "#113ed1",
	onInit: renderBgColor,
	onInput: renderBgColor,
});

fields.bgImage = createField({
	name: "Background image",
	component: "Image",
	defaultValue: "/bg.jpg",
	onInit: renderBgImage,
	onInput: renderBgImage,
});

fields.images = createImagesField({
	name: "Images",
});

fields.place = createTextField({
	name: "Place",
	startValue: "Some Place",
});

fields.time = createTextField({
	name: "Time",
	startValue: "8:31 PM",
});

fields.headline = createTextField({
	name: "Headline",
	startValue: "BREAKING NEWS",
});

fields.body = createTextField({
	name: "Body",
	startValue: "SOMETHING IS HAPPENING RIGHT NOW",
	component: "Textarea",
});

fields.details = createTextField({
	name: "Details",
});


export default fields;
