import { fabric } from "fabric";
import { asyncReadFileAsDataUrl, asyncReadFileAsText } from "../utils";

export async function renderImage(canvas, file, withBorder) {
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

	function positionInCenter(object) {
		object.left = canvas.width / 2;
		object.top = canvas.height / 2;
		object.originX = "center";
		object.originY = "center";
		object.setCoords({
			width: object.width,
			hright: object.height,
		});
	}

	function addImage(img) {
		setImageSize(img);
		let object;
		if (withBorder) {
			let bg = createBg(img);
			let group = new fabric.Group([bg, img]);
			canvas.add(group);
			object = group;
		} else {
			canvas.add(img);
			object = img;
		}
		positionInCenter(object);
		return object;
	}

	if (file.type == "image/svg+xml") {
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
