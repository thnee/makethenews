<script>
	import { XSquare } from "@steeze-ui/lucide-icons";
	import { Icon } from "@steeze-ui/svelte-icon";

	export let field;

	let name = field.name;
	let files = field.files;
	let el;

	function clear() {
		$files = null;
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
		class="block w-full"
		bind:this={el}
		bind:files={$files}
	/>

	<button
		on:click={clear}
	>
		<Icon src={XSquare} class="w-6 h-6" />
	</button>
</div>
