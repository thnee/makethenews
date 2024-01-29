<script>
	export let field;
	let name = field.name;
	let value = field.value;
</script>

<input
	id={$name}
	type="color"
	class="block w-32 field p-1"
	bind:value={$value}
/>
