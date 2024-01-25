<script>
	export let field;
	let value = field.value;
	let options = field.options;
</script>

{#each $options as style}
	<button
		class="border rounded px-2 py-1 mr-2"
		on:click={() => {value.set(style.name);}}
	>
		{style.label}
	</button>
{/each}
