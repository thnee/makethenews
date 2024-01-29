<script>
	import { Icon } from "@steeze-ui/svelte-icon";
	import { X } from "@steeze-ui/lucide-icons";

	export let field;

	let name = field.name;
	let file = field.file;
	let files = [];
	let el;

	$: {
		if (files.length > 0) {
			$file = files[0];
		}
	}

	function clear() {
		$file = null;
		files = [];
		el.value = null;
	}
</script>

<div class="field flex">
	<input
		id={$name}
		type="file"
		accept="image/png, image/gif, image/jpeg"
		class="block w-full file-btn file:p-2"
		bind:this={el}
		bind:files={files}
	/>

	{#if files.length > 0}
		<button
			class="mx-2"
			on:click={clear}
		>
			<Icon src={X} class="w-6 h-6" />
		</button>
	{/if}
</div>
