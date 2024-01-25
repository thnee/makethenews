<script>
	export let field;
	let name = field.name;
	let value = field.value;
</script>

<input
	id={name}
	name={name}
	type="text"
	class="
		block w-full
		py-1 px-2
		bg-neutral-700
		border-neutral-600
		border
		rounded
	"
	bind:value={$value}
/>
