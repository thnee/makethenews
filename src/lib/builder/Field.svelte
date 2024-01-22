<script>
	import { builder } from "./builder";

	export let name;
	let label, value, type, visible, enableVisible;

	$: {
		if (builder.fields) {
			label = builder.fields[name].label;
			value = builder.fields[name].value;
			type =  builder.fields[name].type;
			visible = builder.fields[name].visible;
			enableVisible = builder.fields[name].enableVisible;
		}
	}
</script>

<div class="flex flex-col mb-4">
	<div class="flex items-center mb-1">
		<label for={name} class="text-lg">
			{$label}
		</label>
		<div class="ml-auto flex">
			{#if $enableVisible}
				<label for={`${name}Enabled`} class="text-sm mr-2">
					On:
				</label>
				<input
					id={`${name}Enabled`}
					type="checkbox"
					bind:checked={$visible}
					class="
						block
						w-6 h-6
						bg-neutral-700
						border-neutral-600
						border
						rounded
					"
				/>
			{/if}
		</div>
	</div>

	<div class="text-lg">
		{#if $type == "text"}
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
		{#if $type == "number"}
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
		{#if $type == "textarea"}
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
	</div>
</div>
