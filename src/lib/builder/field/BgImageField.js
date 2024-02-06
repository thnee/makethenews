import { writable, get } from "svelte/store";

import { Field } from "./Field";

import { asyncReadFileAsDataUrl } from "../utils";

export class BgImageField extends Field {
	constructor({defaultValue, ...kwargs}) {
		super(kwargs);

		this.defaultValue = defaultValue;
		this.file = writable();
		this.src = null;
	}

	init(builder) {
		super.init(builder);

		this.file.subscribe(async (value) => {
			if (value) {
				this.src = await asyncReadFileAsDataUrl(value);
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
