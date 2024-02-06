<script>
	import { Icon } from "@steeze-ui/svelte-icon";
	import { X, FileImage } from "@steeze-ui/lucide-icons";

	export let field;

	let name = field.name;
	let file = field.file;
	let files = [];
	let fileInput;

	$: {
		if (files.length > 0) {
			$file = files[0];
		}
	}

	function clear() {
		$file = null;
		files = [];
		fileInput.value = null;
	}
</script>

<div class="flex items-center field p-1">
	<button
		class="btn flex items-center justify-center gap-2 h-8 px-4"
		on:click={() => {fileInput.click();}}
	>
		Select
		<Icon src={FileImage} class="size-4" />
	</button>

	{#if $file}
		<div class="flex items-center w-full">
			<div class="px-2 overflow-hidden break-all line-clamp-1 text-ellipsis">
				{$file.name}
			</div>

			<div class="ml-auto">
				<button
					class="btn size-8 flex items-center justify-center"
					on:click={clear}
				>
					<Icon src={X} class="size-6" />
				</button>
			</div>
		</div>
	{/if}

	<input
		id={$name}
		type="file"
		accept="image/png, image/gif, image/jpeg"
		class="hidden"
		bind:this={fileInput}
		bind:files={files}
	/>
</div>
