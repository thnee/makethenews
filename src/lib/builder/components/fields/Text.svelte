<script>
	let { field } = $props();
</script>

<input
	id={field.name}
	type="text"
	class="block w-full field py-1 px-2"
	bind:value={field.value}
	on:input={field.onInput}
/>
