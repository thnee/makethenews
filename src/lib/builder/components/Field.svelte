<script>
	import { Icon } from "@steeze-ui/svelte-icon";
	import { Eye, EyeOff } from "@steeze-ui/lucide-icons";

	import Color from "./fields/Color.svelte";
	import Image from "./fields/Image.svelte";
	import Images from "./fields/Images.svelte";
	import Select from "./fields/Select.svelte";
	import Text from "./fields/Text.svelte";
	import Textarea from "./fields/Textarea.svelte";

	let { field } = $props();

	let components = {Color, Image, Images, Select, Text, Textarea};
	let component = components[field.component];

	function onVisibleChange() {
		field.visible = !field.visible;
		field.onInput();
	}
</script>

<div class="flex flex-col mb-3 w-full">
	<div class="flex items-end mb-0.5">
		<label for={field.name} class="text-md pl-2">
			{field.name}
		</label>
		{#if field.enableVisible}
			<div class="ml-auto pr-1">
				<button
					class="btn size-8 flex items-center justify-center"
					on:click={onVisibleChange}
				>
					<Icon src={field.visible ? Eye : EyeOff} class="size-6" />
				</button>
			</div>
		{/if}
	</div>

	<div>
		<svelte:component this={component} bind:field={field} />
	</div>
</div>
