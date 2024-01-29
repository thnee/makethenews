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
	<div class="flex items-center">
		<label for={name} class="text-md mb-0.5">
			{$label}
		</label>
		<div class="ml-auto flex">
			{#if $enableVisible}
				<label for={`${name}Enabled`} class="text-sm mr-2">
					<button
						on:click={() => {$visible = !$visible;}}
					>
						<Icon src={$visible ? Eye : EyeOff} class="w-6 h-6" />
					</button>
				</label>
			{/if}
		</div>
	</div>

	<div>
		{#if field}
			<svelte:component this={comp} field={field} />
		{/if}
	</div>
</div>
