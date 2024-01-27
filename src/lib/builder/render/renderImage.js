import { fabric } from "fabric";

export async function renderImage(canvas, src) {
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

	function createGroup(bg, img) {
		let group = new fabric.Group([bg, img]);
		group.left = canvas.width / 2;
		group.top = canvas.height / 2;
		group.originX = "center";
		group.originY = "center";
		group.setCoords({
			width: group.width,
			hright: group.height,
		});
		return group;
	}

	return new Promise((resolve) => {
		fabric.Image.fromURL(src, (img) => {
			setImageSize(img);
			let bg = createBg(img);
			let group = createGroup(bg, img);
			canvas.add(group);
			canvas.requestRenderAll();
			resolve(group);
		});
	});
}
