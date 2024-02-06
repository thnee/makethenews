<script>
	import { Icon } from "@steeze-ui/svelte-icon";
	import { Eye, EyeOff } from "@steeze-ui/lucide-icons";

	import { builder } from "../../builder";

	import Style from "./parts/Style.svelte";
	import Size from "./parts/Size.svelte";
	import Images from "./parts/Images.svelte";
	import Color from "./parts/Color.svelte";
	import Image from "./parts/Image.svelte";
	import Text from "./parts/Text.svelte";

	export let name;
	let field, fieldComp, label, visible, enableVisible, comp;

	let fieldComps = {Style, Size, Images, Color, Image, Text};

	$: {
		if (builder.fields) {
			field = builder.fields[name];

			fieldComp = field.fieldComp;
			label = field.label;
			visible = field.visible;
			enableVisible = field.enableVisible;

			comp = fieldComps[$fieldComp];
		}
	}
</script>

<div class="flex flex-col mb-3">
	<div class="flex items-end mb-0.5">
		<label for={name} class="text-md pl-2">
			{$label}
		</label>
		{#if $enableVisible}
			<div class="ml-auto pr-1">
				<button
					class="btn size-8 flex items-center justify-center"
					on:click={() => {$visible = !$visible;}}
				>
					<Icon src={$visible ? Eye : EyeOff} class="size-6" />
				</button>
			</div>
		{/if}
	</div>

	<div>
		{#if field}
			<svelte:component this={comp} field={field} />
		{/if}
	</div>
</div>
