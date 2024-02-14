import { fabric } from "fabric";
import { canvas } from "../../components/Builder.svelte";
import fields from "../fields.svelte";

import { asyncReadFileAsDataUrl, isFile, isString } from "../utils";

export function renderWidth() {
	canvas.setWidth(fields.width.value);
}

export function renderHeight() {
	canvas.setHeight(fields.height.value);
}

export function renderBgColor() {
	canvas.setBackgroundColor(fields.bgColor.value);
	canvas.requestRenderAll();
}

export async function renderBgImage() {
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

	function setImg(url) {
		fabric.Image.fromURL(
			url,
			(img) => {
				setBgImageSize(canvas, img);
				canvas.setBackgroundImage(img);
				canvas.requestRenderAll();
			}
		);
	}

	if (fields.bgImage.visible) {
		if (isFile(fields.bgImage.value)) {
			let src = await asyncReadFileAsDataUrl(fields.bgImage.value);
			setImg(src);
		}
		else if (isString(fields.bgImage.value)) {
			setImg(fields.bgImage.value);
		}
	} else {
		canvas.setBackgroundImage(null);
		canvas.requestRenderAll();
	}
}
