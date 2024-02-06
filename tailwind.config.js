export default {
	content: ["./src/**/*.{html,js,css,scss,svelte}"],
	theme: {
		extend: {
			colors: {
				"pageBg": "#222",
				"pageFg": "white",
				"fieldBg": "#393939",
				"fieldBorder": "#111",
				"fieldFg": "white",
				"buttonBg": "#323232",
				"buttonBorder": "#111",
				"buttonFg": "white",
				"buttonHoverBg": "#424242",
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
	]
};
