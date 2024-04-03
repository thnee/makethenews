<script>
	import { Download } from "lucide-svelte";

	import { canvas } from "./Builder.svelte";

	function downloadCanvas() {
		let a = document.createElement("a");
		a.download = "news.png";
		a.href = canvas.toDataURL({
			format: "png",
		});
		a.click();
		a.remove();
	}
</script>

<button
	class="
		btn
		w-56 h-12
		p-4
		text-lg
		flex items-center
	"
	on:click={() => {downloadCanvas();}}
>
	<Download class="mr-10" />
	Download
</button>
