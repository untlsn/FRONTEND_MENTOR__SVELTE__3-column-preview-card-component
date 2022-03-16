<script lang="ts">
export let color: string;
export let name: string;
export let text: string;
</script>


<article style="--bg: {color}" class="w-80 text-white p-12 space-y-10">
  <slot name="img" />
  <h1 class="text-4xl uppercase">{name}</h1>
  <p class="pb-8 opacity-70">{text}</p>
  <button
    class="px-8 py-3 border-2 border-white rounded-full bg-white hover:(bg-transparent text-white)"
    on:click={() => alert(`Learn more about ${name}`)}
  >
    Learn more
  </button>
</article>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&display=swap');
  h1 {
    font-family: 'Big Shoulders Display', cursive;
    font-weight: 700;
  }
  article {
    --bg: '';
    background-color: var(--bg);
  }
  button {
    color: var(--bg);
  }
</style>
