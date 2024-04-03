import fields from "../fields.svelte";

export function renderStyle() {
	for (let field of Object.values(fields)) {
		if (field.onBeforeStyle) {
			field.onBeforeStyle();
		}
	}

	for (let option of fields.style.options) {
		if (option.value == fields.style.value) {
			option.renderer();
		}
	}

	for (let field of Object.values(fields)) {
		if (field.onStyle) {
			field.onStyle();
		}
	}
}
