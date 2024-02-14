<script>
	let { field } = $props();

	function onSelect(option) {
		field.value = option.value;
		field.onInput();
	}
</script>

{#each field.options as option}
	<button
		class="btn px-2 py-1 mr-2"
		on:click={() => {onSelect(option);}}
	>
		{option.label}
	</button>
{/each}
