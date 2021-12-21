<script lang="ts" context="module">
  export async function load({ page }) {
    const slug = page.params.slug

    return {
      props: {
        slug
      }
    }
  }
</script>

<script lang="ts">
  import { nav } from '$state/nav.store'
  export let slug

  $: title = slug.split('-').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join(' ');

  $: slug, nav.set({ currentRoute: slug })
</script>

<h1>{title}</h1>