<script>
	import { X } from "@steeze-ui/lucide-icons";
	import { Icon } from "@steeze-ui/svelte-icon";

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
	<input
		id={name}
		name={name}
		type="file"
		accept="image/png, image/gif, image/jpeg"
		class="block w-full"
		bind:this={el}
		bind:files={files}
	/>

	<button
		on:click={clear}
	>
		<Icon src={X} class="w-6 h-6" />
	</button>
</div>
