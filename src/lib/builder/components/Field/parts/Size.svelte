<script>
	export let field;

	let name = field.name;
	let value = field.value;
</script>

<input
	id={$name}
	type="text"
	class="block w-full field py-1 px-2"
	bind:value={$value}
/>
