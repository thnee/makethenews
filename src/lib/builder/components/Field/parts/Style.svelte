<script>
	export let field;

	let value = field.value;
	let options = field.options;
</script>

{#each $options as style}
	<button
		class="
			px-2 py-1 mr-2
			border rounded
			bg-neutral-700
			border-neutral-600
			hover:bg-neutral-600
		"
		on:click={() => {value.set(style.name);}}
	>
		{style.label}
	</button>
{/each}
