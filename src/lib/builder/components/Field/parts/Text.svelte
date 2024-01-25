<script>
	export let field;
	let name = field.name;
	let value = field.value;
	let textComp = field.textComp;
</script>

{#if $textComp == "text"}
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
{/if}

{#if $textComp == "textarea"}
<textarea
	id={name}
	name={name}
	rows="2"
	cols="64"
	class="
		block w-full
		py-1 px-2
		bg-neutral-700
		border-neutral-600
	"
	bind:value={$value}
/>
{/if}
