import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import Unfonts from "unplugin-fonts/vite";

export default defineConfig({
	plugins: [
		sveltekit(),
		Unfonts({
			fontsource: {
				families: [
					{
						name: "Archivo",
						weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
						styles: ["italic", "normal"],
					},
					{
						name: "Archivo Narrow",
						weights: [400, 500, 600, 700],
						styles: ["italic", "normal"],
					},
					{
						name: "Archivo Black",
						weights: [400],
						styles: ["normal"],
					},
				],
			},
		})
	],
});
