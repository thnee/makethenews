import { writable } from "svelte/store";

export class Field {
	constructor({
		fieldComp,
		name,
		label,
		value,
		visible = false,
		enableVisible = false,
	}) {
		this.fieldComp = writable(fieldComp);
		this.name = writable(name);
		this.value = writable(value);
		this.label = writable(label);
		this.visible = writable(visible);
		this.enableVisible = writable(enableVisible);
	}

	init(builder) {
		this.builder = builder;
	}
}

