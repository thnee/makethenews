import {
	createTextBox, renderTextBox, renderTextBoxStyle,
	addImage, removeImage,
} from "./render";

export function createField(props) {
	let field = {...props};

	if (props.enableVisible === undefined) {
		field.enableVisible = true;
	}

	if (field.enableVisible) {
		field.visible = true;
	}

	if (props.startValue !== undefined) {
		field.value = props.startValue;
	}
	else if (props.defaultValue !== undefined) {
		field.value = props.defaultValue;
	} else {
		field.value = undefined;
	}

	return field;
}

export function createTextField(props) {
	props.component = props.component || "Text";
	props.startValue = props.startValue || "";

	let field = createField(props);

	field.onInit = () => { createTextBox(field); };
	field.onStyle = () => { renderTextBoxStyle(field); };
	field.onInput = () => { renderTextBox(field); };

	return field;
}

export function createImagesField(props) {
	props.component = props.component || "Images";
	props.startValue = [];

	let field = createField(props);

	field.images = [];
	field.enableVisible = false;
	field.withBorder = true;

	field.onAddFile = addImage;
	field.onRemoveFile = removeImage;

	field.styleImages = [];

	field.onBeforeStyle = () => {
		for (let image of field.styleImages || []) {
			for (const [index, valueImage] of field.value.entries()) {
				if (valueImage.file.src && valueImage.file.src == image.src) {
					removeImage(index);
				}
			}
		}
	};

	field.onStyle = async () => {
		for (let image of field.styleImages || []) {
			await addImage(image, image.options);
		}
	};

	return field;
}
