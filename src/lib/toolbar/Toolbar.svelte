<script lang="ts">
  import ToolbarGroup from "./ToolbarGroup.svelte";
  import ToolbarItem from "./ToolbarItem.svelte";
</script>

<div class="toolbar">
  <ToolbarGroup name="Content Types">
    <ToolbarItem name="Users"></ToolbarItem>
  </ToolbarGroup>
  <ToolbarGroup name="Plugins">
    <ToolbarItem name="Analytics" />
    <ToolbarItem name="Content Type Builder" />
    <ToolbarItem name="Files Upload" />
    <ToolbarItem name="Roles & Permissions" />
    <ToolbarItem name="Settings Manager" />
  </ToolbarGroup>
  <ToolbarGroup name="General">
    <ToolbarItem name="Plugins" />
    <ToolbarItem name="Marketplace" />
    <ToolbarItem name="Configurations" />
  </ToolbarGroup>
</div>

<style lang="scss">
  .toolbar {
    grid-area: toolbar;
    background-color: var(--clr-black);
    color: var(--clr-white);
  }
</style>