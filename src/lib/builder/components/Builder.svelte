<script>
	import { Icon } from "@steeze-ui/svelte-icon";
	import { Download } from "@steeze-ui/lucide-icons";

	import { builder } from "../builder";
	import Field from "./Field/Field.svelte";
	import Canvas from "./Canvas.svelte";

	let fontsLoaded = false;

	let sizes = Array.from(new Array(40), (x, i) => i + 10);
	let weights = Array.from(new Array(9), (x, i) => (i + 1) * 100);
	let fonts = [];
	weights.forEach((weight) => {
		sizes.forEach((size) => {
			fonts.push(`${weight} ${size}px Archivo`);
			fonts.push(`${weight} ${size}px Archivo Narrow`);
		});
	});

	Promise.all(
		fonts.map((item) => {
			return document.fonts.load(item);
		})
	).then(() => {
		fontsLoaded = true;
	});
</script>

<div class="flex">
	<div class="flex-none p-4" style="width: 500px;">
		<Field name="style" />
		<div class="flex gap-6 w-full">
			<div class="flex-1">
				<Field name="width" />
			</div>
			<div class="flex-1">
				<Field name="height" />
			</div>
		</div>
		<Field name="bgColor" />
		<Field name="bgImage" />
		<Field name="images" />
		<Field name="place" />
		<Field name="time" />
		<Field name="headline" />
		<Field name="body" />
		<Field name="details" />
	</div>

	<div class="flex flex-col">
		<div class="p-4">
			{#if fontsLoaded}
				<Canvas />
			{/if}
		</div>

		<button
			class="
				btn
				w-56 h-12
				mx-auto p-4
				text-lg
				flex items-center
			"
			on:click={() => {builder.downloadCanvas();}}
		>
			<Icon src={Download} class="w-6 h-6 mr-10" />
			Download
		</button>
	</div>
</div>
