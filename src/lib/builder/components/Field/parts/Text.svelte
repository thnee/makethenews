<script>
	export let field;

	let name = field.name;
	let value = field.value;
	let textComp = field.textComp;
</script>

{#if $textComp == "text"}
	<input
		id={$name}
		type="text"
		class="block w-full field py-1 px-2"
		bind:value={$value}
	/>
{/if}

{#if $textComp == "textarea"}
	<textarea
		id={$name}
		rows="2"
		cols="64"
		class="block w-full field py-1 px-2"
		bind:value={$value}
	/>
{/if}
