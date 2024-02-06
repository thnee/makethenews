export async function asyncReadFileAsDataUrl(file) {
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

export async function asyncReadFileAsText(file) {
	return new Promise((resolve) => {
		let reader = new FileReader();
		reader.onload = () => {
			resolve(reader.result);
		};
		reader.onerror = () => {
			resolve(null);
		};
		reader.readAsText(file);
	});
}
