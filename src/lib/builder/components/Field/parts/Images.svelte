<script>
	import { X } from "@steeze-ui/lucide-icons";
	import { Icon } from "@steeze-ui/svelte-icon";

	export let field;

	let name = field.name;
	let files = field.files;
	let inputFiles = [];
	let el;

	$: {
		if (inputFiles.length > 0) {
			field.addFiles(inputFiles);
			inputFiles = [];
			el.value = null;
		}
	}

	function removeFile(index) {
		field.removeFile(index);
	}
</script>

<div class="field">
	<div class="flex flex-col w-full">
		<input
			id={$name}
			type="file"
			accept="image/png, image/gif, image/jpeg"
			multiple
			class="block w-full file-btn file:p-2"
			bind:this={el}
			bind:files={inputFiles}
		/>

		{#if $files.length > 0}
			<div class="mt-2">
				{#each $files as file, index}
					<div class="
						py-1 px-2
						border-b border-dotted last:border-0 border-neutral-400
						flex items-center
					">
						<div class="w-full overflow-hidden text-ellipsis text-sm">
							{file.file.name}
						</div>
						<button
							class="ml-2"
							on:click={() => {removeFile(index);}}
						>
							<Icon src={X} class="w-6 h-6" />
						</button>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
