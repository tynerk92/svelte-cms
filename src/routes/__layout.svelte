<script>
import Toolbar from "$lib/toolbar/Toolbar.svelte";
import ToolbarGroup from "$lib/toolbar/ToolbarGroup.svelte";
import ToolbarItem from "$lib/toolbar/ToolbarItem.svelte";

</script>

<svelte:head>
  <script src="https://kit.fontawesome.com/a06349b299.js" crossorigin="anonymous"></script>
</svelte:head>

<div class="layout">
  <div class="logo">
    Logo
  </div>
  <div class="header">
    Header
  </div>
  <Toolbar />
  <div class="content">
    <slot />
  </div>
</div>

<style lang="scss">
  .layout {
    display: grid;
    grid-template-areas:
      "logo header"
      "toolbar content";
    grid-template-columns: var(--toolbar-width) 1fr;
    grid-template-rows: var(--header-height) 1fr;
    width: 100vw;
    height: 100vh;

    .logo {
      grid-area: logo;
    }

    .header {
      grid-area: header;
    }

    .content {
      grid-area: content;
    }
  }
</style>