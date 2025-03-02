<script>
  import { CustomPill } from "$lib/deck/partials";
  export let transition = "fade";
  export let data = {
    customPill: {
      text: "{Custom Pill}",
      color: "var(--c-text)",
      background: "var(--c-highlight)",
      position: "top left",
    },
    quote: {
      content: "Quote",
      classes: "large-heading",
      color: "var(--c-highlight)",
    },
    author: {
      content: "Author",
      classes: "small-heading",
    },
  };
  const quoteColor = data.quote.color || "var(--c-highlight)";
</script>

<section class="quote-slide" data-transition={transition}>
  {#if data.customPill}
    <CustomPill data={data.customPill} />
  {/if}
  <blockquote class="font-bold {data.quote.classes}" style="background: {quoteColor};">
    {@html data.quote.content}
  </blockquote>
  {#if data.author}
    <cite class="font-medium {data.author.classes}">
      {@html data.author.content}
    </cite>
  {/if}
  <slot />
</section>

<style>
  .quote-slide {
    display: flex !important; /* override reveal.js */
    flex-direction: column;
    justify-content: center;
    padding: var(--padding);
    text-align: left;
    blockquote {
      max-width: 75%;
      line-height: 1.5;
      padding: var(--border-radius);
      border-radius: var(--border-radius);
      /* background-color: var(--c-highlight); */
      :global(mark) {
        background-color: var(--c-highlight-2);
      }
    }
    cite {
      display: block;
      font-style: normal;
      padding: var(--border-radius);
    }
  }
</style>
