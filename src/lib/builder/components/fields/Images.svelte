<script>
	import { X, Plus } from "lucide-svelte";

	let { field } = $props();

	let input = $state();

	function onInput() {
		for (let file of Array.from(input.files)) {
			field.onAddFile(file);
		}
		input.files = undefined;
	}

	function onRemove(index) {
		field.onRemoveFile(index);
	}
</script>

<div class="flex flex-col field">
	<div class="flex items-center p-1 gap-2">
		<button
			class="btn flex items-center justify-center gap-2 h-8 px-4"
			on:click={() => {input.click();}}
		>
			Add
			<Plus size="20" />
		</button>
		<input
			id="withBorder"
			type="checkbox"
			class="checkbox"
			bind:checked={field.withBorder}
		/>
		<label for="withBorder">with border</label>
	</div>

	<input
		type="file"
		accept="image/png, image/gif, image/jpeg, image/svg+xml"
		multiple
		class="hidden"
		bind:this={input}
		on:input={onInput}
	/>

	{#if field.value.length > 0}
		<div class="mt-1">
			{#each field.value as { file }, index}
				<div class="
					p-1 pl-2
					border-b border-dotted last:border-0 border-neutral-400
					flex items-center
				">
					<div class="w-full overflow-hidden text-ellipsis text-sm">
						{file.name}
					</div>
					<div class="flex-none">
						<button
							class="btn size-8 flex items-center justify-center"
							on:click={() => {onRemove(index);}}
						>
							<X />
						</button>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
