<script>
	import { X, FileImage } from "lucide-svelte";
	import { isFile, isString } from "$lib/builder/js/utils";

	let { field = $bindable() } = $props();

	let input = $state();

	function onInput() {
		field.value = input.files[0];
		field.onInput();
	}

	function onRemove() {
		field.value = field.defaultValue;
		input.files = undefined;
		field.onInput();
	}
</script>

<div class="flex items-center field p-1">
	<button
		class="btn flex items-center justify-center gap-2 h-8 px-4"
		on:click={() => {input.click();}}
	>
		Select
		<FileImage size="16" />
	</button>

	<div class="flex items-center w-full">
		<div class="px-2 overflow-hidden break-all line-clamp-1 text-ellipsis">
			{#if isFile(field.value)}
				{field.value.name}
			{/if}
			{#if isString(field.value)}
				{field.value.substring(1)}
			{/if}
		</div>

		{#if isFile(field.value)}
			<div class="ml-auto">
				<button
					class="btn size-8 flex items-center justify-center"
					on:click={onRemove}
				>
					<X />
				</button>
			</div>
		{/if}
	</div>

	<input
		id={field.name}
		type="file"
		accept="image/png, image/gif, image/jpeg"
		class="hidden"
		bind:this={input}
		on:input={onInput}
	/>
</div>
