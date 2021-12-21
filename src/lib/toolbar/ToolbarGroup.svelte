<script lang="ts">
  import { setContext } from 'svelte';

  export let name: string;

  const baseUrl: string = name.toLowerCase().split(' ').join('-');

  setContext(name.toLowerCase().split(' ').join('-'), { baseUrl })
</script>

<h4>{name}</h4>
<div class="toolbar-group">
  <slot />
</div>

<style lang="scss">
  h4 {
    padding: var(--toolbar-padding);
    padding-top: 1.5rem;
    text-transform: uppercase;
    opacity: 0.4;
  }
</style>