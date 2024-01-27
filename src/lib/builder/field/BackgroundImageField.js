import { writable, get } from "svelte/store";

import { Field } from "./Field";

import { readFile } from "../utils";

export class BackgroundImageField extends Field {
	constructor({defaultValue, ...kwargs}) {
		super(kwargs);
		this.defaultValue = defaultValue;
		this.files = writable();
		this.src = null;
	}

	init(builder) {
		super.init(builder);

		this.files.subscribe(async (value) => {
			if (value) {
				this.src = await readFile(value[0]);
				this.visible.set(true);
			} else {
				this.src = this.defaultValue;
			}
			this.setBackgroundImage();
		});

		this.visible.subscribe(() => {
			this.setBackgroundImage();
		});
	}

	setBackgroundImage() {
		if (get(this.visible) && this.src) {
			this.value.set(this.src);
		} else {
			this.value.set(null);
		}
	}
}
