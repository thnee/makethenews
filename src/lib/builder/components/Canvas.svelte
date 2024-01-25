<script context="module">
	import { fabric } from "fabric";

	let canvas = new fabric.Canvas();
</script>

<script>
	import { onDestroy } from "svelte";

	import { builder } from "../builder";

	let canvasEl;

	$: {
		if (canvasEl) {
			canvas.initialize(canvasEl);
			builder.initRender(canvas);
		}
	}

	onDestroy(() => {
		canvas.dispose();
	});
</script>

<canvas bind:this={canvasEl} />
