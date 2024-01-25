import { writable } from "svelte/store";

import { Field } from "./Field";

export class StyleField extends Field {
	constructor({options, ...kwargs}) {
		kwargs.fieldComp = "Style";
		super(kwargs);
		this.options = writable(options);
	}
}
