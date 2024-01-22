<script>
	import { onDestroy } from "svelte";

	import { builder } from "./builder";

	import Field from "./Field.svelte";

	let fontsLoaded = false;
	let canvasEl = null;

	let fonts = [
		"500 16px Archivo",
		"200 16px Archivo",
		"200 22px Archivo",
		"600 22px Archivo",
		"600 28px Archivo Narrow",
		"100 22px Archivo Narrow",
	];

	Promise.all(
		fonts.map((item) => {
			return document.fonts.load(item);
		})
	).then(() => {
		fontsLoaded = true;
	});

	$: {
		if (fontsLoaded && canvasEl) {
			builder.initCanvas(canvasEl);
		}
	}

	onDestroy(() => {
		builder.destruct();
	});
</script>

{#if fontsLoaded}
	<div class="flex">
		<div class="flex-none p-4" style="width: 500px;">
			<div class="mb-4">
				<div class="text-lg mb-1">Style</div>
				{#each builder.styles as style}
					<button
						class="border rounded px-2 py-1 mr-2"
						on:click={() => {builder.style.set(style);}}
					>
						{style.label}
					</button>
				{/each}
			</div>
			<div class="flex gap-6 w-full">
				<div class="flex-1">
					<Field name="width" />
				</div>
				<div class="flex-1">
					<Field name="height" />
				</div>
			</div>
			<Field name="place" />
			<Field name="time" />
			<Field name="headline" />
			<Field name="body" />
			<Field name="details" />
		</div>

		<div class="p-4">
			<canvas bind:this={canvasEl} />
		</div>
	</div>
{/if}
