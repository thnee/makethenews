<script context="module">
	import { fabric } from "fabric";
	export let canvas = new fabric.Canvas();
</script>

<script>
	import { browser } from "$app/environment";

	import Field from "./Field.svelte";
	import Download from "./Download.svelte";

	import fields from "../js/fields.svelte";
	import { loadFonts } from "../js/fonts";

	let fontsLoaded = $state(false);
	let canvasEl = $state();
	let inited = $state(false);

	if (browser) {
		loadFonts().then(() => {
			fontsLoaded = true;
		});
	}

	$effect(() => {
		if (!fontsLoaded || !canvasEl || inited) {
			return;
		}

		canvas.initialize(canvasEl);

		fields.place.onInit(fields.place);
		fields.time.onInit(fields.time);
		fields.headline.onInit(fields.headline);
		fields.body.onInit(fields.body);
		fields.details.onInit(fields.details);

		fields.style.onInit();
		fields.width.onInit();
		fields.height.onInit();
		fields.bgColor.onInit();
		fields.bgImage.onInit();

		inited = true;
	});
</script>

<div class="flex">
	<div class="flex-none p-4" style="width: 500px;">
		<Field bind:field={fields.style} />
		<div class="flex gap-6">
			<Field bind:field={fields.width} />
			<Field bind:field={fields.height} />
		</div>
		<Field bind:field={fields.bgColor} />
		<Field bind:field={fields.bgImage} />
		<Field bind:field={fields.place} />
		<Field bind:field={fields.time} />
		<Field bind:field={fields.headline} />
		<Field bind:field={fields.body} />
		<Field bind:field={fields.details} />
		<Field bind:field={fields.images} />
	</div>

	<div class="flex flex-col">
		<div class="p-4">
			<canvas bind:this={canvasEl} />
		</div>
		<div class="pl-8">
			<Download />
		</div>
	</div>
</div>
