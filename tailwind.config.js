export default {
	content: ["./src/**/*.{html,js,css,scss,svelte}"],
	theme: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/forms"),
	]
};
