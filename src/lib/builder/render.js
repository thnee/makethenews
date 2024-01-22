import { get } from "svelte/store";

import { renderRealNews } from "./renderRealNews";
import { renderTrueNews } from "./renderTrueNews";

export function renderCanvas(builder) {
	builder.canvas.setWidth(get(builder.fields.width.value));
	builder.canvas.setHeight(get(builder.fields.height.value));

	builder.canvas.setBackgroundColor("#113ed1");
}

export function renderStyle(builder, style) {
	if (style.name == "real") {
		renderRealNews(builder);
	}
	if (style.name == "true") {
		renderTrueNews(builder);
	}
}
