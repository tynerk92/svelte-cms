<script lang="ts">
  export let name;
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