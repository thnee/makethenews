import { writable, get } from "svelte/store";

import { fabric } from "fabric";

export class Field {
	constructor({
		type = "text",
		name,
		label,
		value,
		visible = false,
		enableVisible = false,
	}) {
		this.type = writable(type);
		this.name = writable(name);
		this.value = writable(value);
		this.label = writable(label);
		this.visible = writable(visible);
		this.enableVisible = writable(enableVisible);
	}
}

export class TextField extends Field {
	createFabObj(builder) {
		this.builder = builder;

		if (get(this.visible)) {
			let text = new fabric.IText(get(this.value));
			let bg = new fabric.Rect();
			let group = new fabric.Group([bg, text]);

			this.fabObj = {text, bg, group};

			this.value.subscribe((value) => {
				this.fabObj.text.set("text", value);
				this.builder.canvas.requestRenderAll();
			});

			this.visible.subscribe((value) => {
				this.fabObj.group.visible = value;
			});
		}
	}
}
