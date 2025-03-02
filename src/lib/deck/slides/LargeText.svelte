<script>
  import { CustomPill, Pointer } from "$lib/deck/partials";
  export let transition;
  export let data = {
    customPill: {
      text: "{Custom Pill}",
      color: "var(--c-text)",
      background: "var(--c-highlight)",
      position: "top left",
    },
    title: {
      level: 2,
      content: "{Content}",
      classes: "large-heading",
    }
  };
  const textClass = data.title.classes || "large-heading";
  const headingLevel = data.title.level || 2;
</script>

<section class="large-text" data-transition={transition}>
  {#if data.customPill}
    <CustomPill data={data.customPill} /> 
  {/if}
  <div class="inner">
    <svelte:element this={`h${Math.min(Math.max(headingLevel, 1), 6)}`} class={textClass}>
      {@html data.title.content}
    </svelte:element>
  </div>
  <slot/>
</section>

<style>
  .large-text {
    display: flex !important; /* override revealjs */
    flex-direction: column;
    gap: var(--padding);
    justify-content: center;
    padding: var(--padding);
    .inner {
      max-width: 75%;
      margin: 0 auto;

    }
  }

</style>