import { writable, get } from "svelte/store";

import { fabric } from "fabric";

import { Field } from "./Field";

export class TextField extends Field {
	constructor({
		textComp = "text",
		...kwargs
	}) {
		kwargs.fieldComp = "Text";
		super(kwargs);
		this.textComp = writable(textComp);
	}

	init(builder) {
		super.init(builder);

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
