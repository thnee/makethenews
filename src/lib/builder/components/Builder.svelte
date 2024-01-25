<script>
	import { Icon } from "@steeze-ui/svelte-icon";
	import { Download } from "@steeze-ui/lucide-icons";

	import { builder } from "../builder";
	import Field from "./Field/Field.svelte";
	import Canvas from "./Canvas.svelte";

	let fontsLoaded = false;

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
</script>

{#if fontsLoaded}
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
			<Field name="place" />
			<Field name="time" />
			<Field name="headline" />
			<Field name="body" />
			<Field name="details" />
		</div>

		<div class="flex flex-col">
			<div class="p-4">
				<Canvas />
			</div>

			<button
				class="
					w-56 h-12 mx-auto
					border rounded-md
					bg-neutral-700
					border-neutral-600
					hover:bg-neutral-600
					flex items-center p-4 text-lg
				"
				on:click={() => {builder.downloadCanvas();}}
			>
				<Icon src={Download} class="w-6 h-6 mr-10" />
				Download
			</button>
		</div>
	</div>
{/if}
