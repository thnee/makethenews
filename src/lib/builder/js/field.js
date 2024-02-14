import { createTextBox, renderTextBox, renderTextBoxStyle } from "./render";

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

	field.isStyled = true;

	field.onInit = () => { createTextBox(field); };
	field.onStyle = () => { renderTextBoxStyle(field); };
	field.onInput = () => { renderTextBox(field); };

	return field;
}
