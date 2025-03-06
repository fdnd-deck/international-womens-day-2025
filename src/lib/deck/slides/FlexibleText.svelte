<script>
  export let transition;
  export let data = {
    texts: [
      {
        content: "Pas je op dat je geen token wordt?",
      }
    ]
  }
</script>

<section class="flexible-text" data-transition={transition}>
    {#each data.texts as text}
      <div class="text { text.classes }" style="left: {text.position.x}; top: {text.position.y}">
        {@html text.content}
      </div>
    {/each}
  <slot/>
</section>

<style>
  .flexible-text {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .text {
    position: absolute;
    max-width: 50%;
  }
</style>
