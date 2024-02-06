import { writable, get } from "svelte/store";

import { Field } from "./Field";

import { renderImage } from "../render";

export class ImagesField extends Field {
	constructor(kwargs) {
		super(kwargs);

		this.files = writable([]);
		this.withBorder = writable(true);
	}

	addFiles(files) {
		Array.from(files).forEach(async (file) => {
			let object = await renderImage(this.builder.canvas, file, get(this.withBorder));
			this.files.set([...get(this.files), {
				file: file,
				object: object,
			}]);
		});
	}

	removeFile(index) {
		let file = get(this.files)[index];
		this.builder.canvas.remove(file.object);
		this.files.set(get(this.files).filter((_, _index) => {
			return _index != index;
		}));
	}
}
