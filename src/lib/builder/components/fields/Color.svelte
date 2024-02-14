<script>
	let { field } = $props();
</script>

<div class="field p-1">
	<input
		id={field.name}
		type="color"
		class="block w-32"
		bind:value={field.value}
		on:input={field.onInput}
	/>
</div>
