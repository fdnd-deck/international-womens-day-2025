<script>
	import Reveal from "reveal.js";
	import Highlight from "reveal.js/plugin/highlight/highlight";
	import Markdown from "reveal.js/plugin/markdown/markdown";
	import Notes from "reveal.js/plugin/notes/notes";

	import { onMount } from "svelte";

	import "reveal.js/dist/reveal.css";

	import {
		Cover,
		PhotoCollage,
		Planning,
		TextColumns,
		Quote,
	} from "./slides/index.js";

	import { slideContent } from "./slide-content.js";
	import { SprintIndicator } from "./partials";

	onMount(() => {
		const deck = new Reveal({
			plugins: [Markdown, Highlight, Notes],
			autoAnimateEasing: "ease",
			autoAnimateDuration: 1,
			hash: true,
			notes: true,
			// controls: false,
			// progress: false
		});

		deck.initialize();
	});
</script>

<div class="reveal">
	<div class="slides">
		<SprintIndicator />
		{#each slideContent as slide}
			<svelte:component
				this={slide.slideType}
				data={slide.data}
				transition={slide.transition}
			>
				{#if slide.notes}
					<aside class="notes">
						{@html slide.notes}
					</aside>
				{/if}
			</svelte:component>
		{/each}
	</div>
</div>

<style>
	.slides {
		width: 100% !important;
		height: 100% !important;
		inset: 0 !important;
		transform: none !important;
	}
	:global(.reveal.center .slides section) {
		min-height: 100vh !important;
	}
</style>
