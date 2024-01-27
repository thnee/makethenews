import { get } from "svelte/store";

import { fabric } from "fabric";

import { renderRealNews } from "./renderRealNews";
import { renderTrueNews } from "./renderTrueNews";

export async function renderCanvas(builder) {
	let canvas = builder.canvas;

	canvas.setWidth(get(builder.fields.width.value));
	canvas.setHeight(get(builder.fields.height.value));

	canvas.setBackgroundColor(get(builder.fields.bgColor.value));

	function setBgImageSize(canvas, img) {
		let imgRatio = img.width / img.height;
		let canvasRatio = canvas.width / canvas.height;
		if (imgRatio > canvasRatio) {
			// Image orientation is more landscape than canvas orientation
			// Scale image to fit canvas height
			img.scaleToHeight(canvas.height);
		} else {
			// Image orientation is more portrait than canvas orientation
			// Scale iamge to fit canvas width
			img.scaleToWidth(canvas.width);
		}
		img.originX = "center";
		img.originY = "center";
		img.left = canvas.width / 2;
		img.top = canvas.height / 2;
	}

	if (get(builder.fields.bgImage.value)) {
		fabric.Image.fromURL(
			get(builder.fields.bgImage.value),
			(img) => {
				setBgImageSize(canvas, img);
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
