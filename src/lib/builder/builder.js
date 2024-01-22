import { get, writable } from "svelte/store";

import { fabric } from "fabric";

import { createFields } from "./createFields";
import { renderCanvas, renderStyle } from "./render";

class Builder {
	constructor() {
		this.styles = [
			{
				name: "real",
				label: "REAL NEWS",
			},
			{
				name: "true",
				label: "TRUE NEWS",
			}
		];

		this.style = writable(this.styles[0]);
		this.fields = createFields();
	}

	initCanvas(canvasEl) {
		this.canvas = new fabric.Canvas();
		this.canvasEl = null;
		this.canvas.initialize(canvasEl);

		this.fields.width.value.subscribe(() => {
			renderCanvas(this);
		});
		this.fields.height.value.subscribe(() => {
			renderCanvas(this);
		});

		Object.values(this.fields).forEach((field) => {
			field.createFabObj(this);

			if (get(field.visible)) {
				this.canvas.add(field.fabObj.group);

				field.visible.subscribe((value) => {
					field.fabObj.group.visible = value;
					this.canvas.requestRenderAll();
				});
			}
		});

		this.style.subscribe((style) => {
			renderStyle(builder, style);
		});
	}

	destruct() {
		this.canvas.dispose();
	}
}

export let builder = new Builder();
