export function loadFonts() {
	let sizes = Array.from(new Array(40), (x, i) => i + 10);
	let weights = Array.from(new Array(9), (x, i) => (i + 1) * 100);
	let fonts = [];
	weights.forEach((weight) => {
		sizes.forEach((size) => {
			fonts.push(`${weight} ${size}px Archivo`);
			fonts.push(`${weight} ${size}px Archivo Narrow`);
		});
	});

	return Promise.all(
		fonts.map((item) => {
			return document.fonts.load(item);
		})
	);
}
