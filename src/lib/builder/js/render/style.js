import fields from "../fields.svelte";

export function renderStyle() {
	for (let option of fields.style.options) {
		if (option.value == fields.style.value) {
			option.renderer();
		}
	}

	for (let field of Object.values(fields)) {
		if (field.isStyled && field.onStyle) {
			field.onStyle();
		}
	}
}
