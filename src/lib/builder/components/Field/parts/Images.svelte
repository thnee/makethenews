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

<div
	class="
		flex gap-2
		py-1 px-2
		bg-neutral-700
		border-neutral-600
		border
		rounded
	"
>
	<div class="flex flex-col w-full">
		<input
			id={name}
			name={name}
			type="file"
			accept="image/png, image/gif, image/jpeg"
			multiple
			class="block w-full my-1"
			bind:this={el}
			bind:files={inputFiles}
		/>

		{#each $files as file, index}
			<div class="flex gap-2 my-1">
				<div class="w-full overflow-hidden text-ellipsis">
					{file.file.name}
				</div>
				<button
					on:click={() => {removeFile(index);}}
				>
					<Icon src={X} class="w-6 h-6" />
				</button>
			</div>
		{/each}
	</div>
</div>
