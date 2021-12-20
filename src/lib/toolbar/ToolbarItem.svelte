<script lang="ts">
  import { nav } from '../../state/nav.store'
  export let name;
</script>

<a 
  class="toolbar-item"
  href="#"
>
  <span class="icon">
    <i class="fas fa-angle-right"></i>
  </span>
  {name}
</a>

<style lang="scss">
  .toolbar-item {
    display: block;
    cursor: pointer;
    position: relative;
    padding: var(--toolbar-padding);
    opacity: 0.8;

    .icon {
      padding-right: 1rem;
    }

    &.active {
      color: var(--clr-accent);

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 4px;
        background-color: var(--clr-accent);
      }

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        width: 6px;
        height: 50%;
        background-color: var(--clr-accent);
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
    }

    &:hover {
      color: var(--clr-accent);
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
</style>