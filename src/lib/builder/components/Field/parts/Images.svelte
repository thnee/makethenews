<script>
	import { Icon } from "@steeze-ui/svelte-icon";
	import { X, Plus } from "@steeze-ui/lucide-icons";

	export let field;

	let withBorder = field.withBorder;
	let files = field.files;
	let inputFiles = [];
	let fileInput;

	$: {
		if (inputFiles.length > 0) {
			field.addFiles(inputFiles);
			inputFiles = [];
			fileInput.value = null;
		}
	}

	function removeFile(index) {
		field.removeFile(index);
	}
</script>

<div class="flex flex-col field">
	<div class="flex items-center p-1 gap-2">
		<button
			class="btn flex items-center justify-center gap-2 h-8 px-4"
			on:click={() => {fileInput.click();}}
		>
			Add
			<Icon src={Plus} class="size-4" />
		</button>
		<input
			id="withBorder"
			type="checkbox"
			class="checkbox"
			bind:checked={$withBorder}
		/>
		<label for="withBorder">with border</label>
	</div>

	<input
		type="file"
		accept="image/png, image/gif, image/jpeg, image/svg+xml"
		multiple
		class="hidden"
		bind:this={fileInput}
		bind:files={inputFiles}
	/>

	{#if $files.length > 0}
		<div class="mt-2">
			{#each $files as file, index}
				<div class="
					p-1 pl-2
					border-b border-dotted last:border-0 border-neutral-400
					flex items-center
				">
					<div class="w-full overflow-hidden text-ellipsis text-sm">
						{file.file.name}
					</div>
					<div class="flex-none">
						<button
							class="btn size-8 flex items-center justify-center"
							on:click={() => {removeFile(index);}}
						>
							<Icon src={X} class="size-6" />
						</button>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
