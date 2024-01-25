<script>
	import { builder } from "../../builder";

	import Style from "./parts/Style.svelte";
	import Size from "./parts/Size.svelte";
	import Color from "./parts/Color.svelte";
	import Image from "./parts/Image.svelte";
	import Text from "./parts/Text.svelte";

	export let name;
	let field, fieldComp, label, visible, enableVisible, comp;

	let fieldComps = {Style, Size, Color, Image, Text};

	$: {
		if (builder.fields) {
			field = builder.fields[name];

			fieldComp = builder.fields[name].fieldComp;
			label = builder.fields[name].label;
			visible = builder.fields[name].visible;
			enableVisible = builder.fields[name].enableVisible;

			comp = fieldComps[$fieldComp];
		}
	}
</script>

<div class="flex flex-col mb-4">
	<div class="flex items-center mb-1">
		<label for={name} class="text-lg">
			{$label}
		</label>
		<div class="ml-auto flex">
			{#if $enableVisible}
				<label for={`${name}Enabled`} class="text-sm mr-2">
					On:
				</label>
				<input
					id={`${name}Enabled`}
					type="checkbox"
					bind:checked={$visible}
					class="
						block
						w-6 h-6
						bg-neutral-700
						border-neutral-600
						border
						rounded
					"
				/>
			{/if}
		</div>
	</div>

	<div class="text-lg">
		{#if field}
			<svelte:component this={comp} field={field} />
		{/if}
	</div>
</div>
