import { get } from "svelte/store";

import { fabric } from "fabric";

import { renderRealNews } from "./renderRealNews";
import { renderTrueNews } from "./renderTrueNews";

export async function renderCanvas(builder) {
	let canvas = builder.canvas;
	canvas.setWidth(get(builder.fields.width.value));
	canvas.setHeight(get(builder.fields.height.value));

	canvas.setBackgroundColor(get(builder.fields.bgColor.value));

	if (get(builder.fields.bgImage.value)) {
		fabric.Image.fromURL(
			get(builder.fields.bgImage.value),
			(img) => {
				let imgRatio = img.width / img.height;
				let canvasRatio = canvas.width / canvas.height;
				if (imgRatio < canvasRatio) {
					img.scaleToWidth(canvas.width);
				} else {
					img.scaleToHeight(canvas.height);
				}
				img.originX = "center";
				img.originY = "center";
				img.left = builder.canvas.width / 2;
				img.top = builder.canvas.height / 2;
				canvas.setBackgroundImage(img);
				canvas.requestRenderAll();
			}
		);
	} else {
		canvas.setBackgroundImage(null);
	}
}

export function renderContent(builder, style) {
	if (style == "real") {
		renderRealNews(builder);
	}
	if (style == "true") {
		renderTrueNews(builder);
	}
}
