<script>
	import Builder from "$lib/builder/components/Builder.svelte";
</script>

<Builder />

<svelte:head>
	<title>Make the News!</title>
	<meta name="description" content="Make the News!">
	<meta name="keywords" content="make the news, breaking news, news generator, content generator, news headlines, news creator, news maker">
</svelte:head>

<div class="text-xs flex flex-col gap-2 m-4">
	<p>
		This application does not store content that is created by users. Content that is created by users only exists on the user device and is discarded upon exit.
	</p>
	<p>
		Default background:
		<a
			class="text-sky-300 hover:underline"
			href="https://www.freepik.com/free-vector/digital-global-technology-banner-with-circuit-diagram_4298994.htm#page=4&query=news%20background&position=6&from_view=search&track=ais&uuid=941b2b05-ae9d-4317-b45f-a2e50c26f41f">
			Image by starline
		</a>
		on Freepik
	</p>
	<p>
		Source code:
		<a
			class="text-sky-300 hover:underline"
			href="https://github.com/thnee/makethenews"
		>
			makethenews on Github
		</a>
	</p>
</div>
