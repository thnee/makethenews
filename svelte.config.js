import path from "path";
import { fileURLToPath } from "url";

import adapter from "@sveltejs/adapter-auto";

import preprocess from "svelte-preprocess";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
	preprocess: [
		preprocess({
			postcss: {
				configFilePath: path.resolve(__dirname, "postcss.config.js"),
			}
		}),
	],

	kit: {
		adapter: adapter()
	}
};
