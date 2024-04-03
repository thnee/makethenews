import { fabric } from "fabric";
import { canvas } from "../../components/Builder.svelte";
import { asyncReadFileAsDataUrl, asyncReadFileAsText } from "../utils";
import fields from "../fields.svelte";

export async function addImage(file, options) {
	if (options.withBorder === undefined) {
		options.withBorder = fields.images.withBorder;
	}
	let object = await renderImage(file, options);
	fields.images.value.push({file, object});
}

export function removeImage(index) {
	let image = fields.images.value[index];
	canvas.remove(image.object);
	fields.images.value.splice(index, 1);
}

async function renderImage(file, options) {
	let borderSize = 4;
	let borderColor = "#a2a8ba";

	function setImageSize(img) {
		let imgRatio = img.width / img.height;
		let canvasRatio = canvas.width / canvas.height;

		// Max image size is slightly more than half of canvas size
		let maxWidth = canvas.width / 1.8;
		let maxHeight = canvas.height / 1.8;

		if (imgRatio > canvasRatio) {
			if (img.width > maxWidth) {
				// Image orientation is more landscape than canvas orientation
				// And image is wider than desired max width
				// Scale image to max width
				img.scaleToWidth(maxWidth);
			}
		} else {
			if (img.height > maxHeight) {
				// Image orientation is more portrait than canvas orientation
				// And image is taller than max height
				// Scale image to max width
				img.scaleToHeight(maxHeight);
			}
		}

		img.left = 0;
		img.top = 0;
		img.originX = "center";
		img.originY = "center";
	}

	function createBg(img) {
		let bg = new fabric.Rect();
		bg.height = img.getScaledHeight() + borderSize;
		bg.width = img.getScaledWidth() + borderSize;
		bg.left = 0;
		bg.top = 0;
		bg.originX = "center";
		bg.originY = "center";
		bg.fill = borderColor;
		return bg;
	}

	function positionObject(object) {
		// If position is given, use that position.
		if (options.position) {
			object.left = options.position.left;
			object.top = options.position.top;
			object.originX = "left";
			object.originY = "top";

		// If no position is given, position it in center.
		} else {
			object.left = canvas.width / 2;
			object.top = canvas.height / 2;
			object.originX = "center";
			object.originY = "center";
		}

		object.setCoords({
			width: object.width,
			height: object.height,
		});
	}

	function addImage(img) {
		setImageSize(img);
		let object;
		if (options.withBorder) {
			let bg = createBg(img);
			let group = new fabric.Group([bg, img]);
			canvas.add(group);
			object = group;
		} else {
			canvas.add(img);
			object = img;
		}
		positionObject(object);
		return object;
	}

	if (file.src) {
		let extension = file.src.split(".").pop();
		if (["svg"].includes(extension)) {
			return new Promise((resolve) => {
				fabric.loadSVGFromURL(file.src, function(objects, options) {
					var img = fabric.util.groupSVGElements(objects, options);
					let object = addImage(img);
					resolve(object);
				});
			});
		}

		if (["jpg"].includes(extension)) {
			return new Promise((resolve) => {
				fabric.Image.fromURL(file.src, (img) => {
					let object = addImage(img);
					resolve(object);
				});
			});
		}
	}

	if (file instanceof File) {
		if (["image/svg+xml"].includes(file.type)) {
			let data = await asyncReadFileAsText(file);
			return new Promise((resolve) => {
				fabric.loadSVGFromString(data, function(objects, options) {
					var img = fabric.util.groupSVGElements(objects, options);
					let object = addImage(img);
					resolve(object);
				});
			});
		}

		if (["image/png", "image/jpeg", "image/gif"].includes(file.type)) {
			let data = await asyncReadFileAsDataUrl(file);
			return new Promise((resolve) => {
				fabric.Image.fromURL(data, (img) => {
					let object = addImage(img);
					resolve(object);
				});
			});
		}
	}
}
