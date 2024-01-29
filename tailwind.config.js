export default {
	content: ["./src/**/*.{html,js,css,scss,svelte}"],
	theme: {
		extend: {
			colors: {
				"pageBg": "#222",
				"pageFg": "white",
				"fieldBg": "#353535",
				"fieldBorder": "#111",
				"fieldFg": "white",
				"buttonBg": "#353535",
				"buttonBorder": "#111",
				"buttonFg": "white",
				"buttonHoverBg": "#444",
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
	]
};
