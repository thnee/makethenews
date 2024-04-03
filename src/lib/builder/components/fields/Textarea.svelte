<script>
	let { field = $bindable() } = $props();
</script>

<textarea
	id={field.name}
	type="text"
	rows="2"
	cols="64"
	class="block w-full field py-1 px-2"
	bind:value={field.value}
	on:input={field.onInput}
></textarea>
