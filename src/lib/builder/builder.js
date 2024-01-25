import { derived } from "svelte/store";

import { createFields } from "./createFields";
import { renderCanvas, renderContent } from "./render";

class Builder {
	constructor() {
		this.fields = createFields();
	}

	initRender(canvas) {
		this.canvas = canvas;

		derived(
			[
				this.fields.width.value,
				this.fields.height.value,
				this.fields.bgImage.value,
				this.fields.bgColor.value,
			],
			(x) => x
		).subscribe(() => {
			renderCanvas(this);
		});

		Object.values(this.fields).forEach((field) => {
			field.init(this);

			if (field.fabObj) {
				this.canvas.add(field.fabObj.group);

				field.visible.subscribe((value) => {
					field.fabObj.group.visible = value;
					this.canvas.requestRenderAll();
				});
			}
		});

		this.fields.style.value.subscribe((style) => {
			renderContent(builder, style);
		});
	}

	downloadCanvas() {
		let a = document.createElement("a");
		a.download = "news.png";
		a.href = this.canvas.toDataURL({
			format: "png",
		});
		a.click();
		a.remove();
	}
}

export let builder = new Builder();
