import { writable, get } from "svelte/store";

import { Field } from "./Field";

import { readFile } from "../utils";
import { renderImage } from "../render";

export class ImagesField extends Field {
	constructor(kwargs) {
		super(kwargs);

		this.files = writable([]);
	}

	addFiles(files) {
		Array.from(files).forEach(async (file) => {
			let src = await readFile(file);
			let img = await renderImage(this.builder.canvas, src);
			this.files.set([...get(this.files), {
				file: file,
				img: img,
			}]);
		});
	}

	removeFile(index) {
		let file = get(this.files)[index];
		this.builder.canvas.remove(file.img);
		this.files.set(get(this.files).filter((_, _index) => {
			return _index != index;
		}));
	}
}
