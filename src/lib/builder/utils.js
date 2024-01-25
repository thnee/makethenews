export async function readFile(file) {
	return new Promise((resolve) => {
		let reader = new FileReader();
		reader.onload = () => {
			resolve(reader.result);
		};
		reader.onerror = () => {
			resolve(null);
		};
		reader.readAsDataURL(file);
	});
}
