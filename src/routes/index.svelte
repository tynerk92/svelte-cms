<script context="module">
  export async function load({ fetch }) {
    const data = await (await fetch('/api/plugins.json?name=analytics')).json()

    return {
      props: {
        ...data
      }
    }
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import type { Component } from "src/types";

  let components: Component[];
  let current: number = 0;

  let worker;
  let compiled;

  export let data

  onMount(() => {
    worker = new Worker('worker.js')

    worker.addEventListener('message', event => {
      compiled = event.data
    })

    components = [
      {
        id: 0,
        name: "App",
        type: "svelte",
        source: `
          <script>
            import Analytics from './Analytics.svelte'
            const name = 'Test'
          <\/script>
          <h1>{name}</h1>
          <Analytics />
        `
      },
      {
        id: 1,
        name: "Analytics",
        type: "svelte",
        source: data
      }
    ]
  })

  let iframe: HTMLIFrameElement;


  function compile(_components: Component[]): void {
    worker?.postMessage(_components)
  }

  $: compile(components)
  
  $: iframe && compiled && update(compiled)

  function update(code: string) {
    iframe.contentWindow.postMessage(code, '*')
  }

  const srcdoc = `
  <!doctype html>
  <html>
    <head>
      <script type="module">
        let c;
        function update(source) {
          const blob = new Blob([source], { type: 'text/javascript' });
          const url = URL.createObjectURL(blob);

          import(url).then(({ default: App }) => {
            if (c) c.$destroy();

            document.body.innerHTML = '';
            c = new App({ target: document.body })
          })
        }

        window.addEventListener('message', event => {
          update(event.data)
        }, false)
      <\/script>
    <\/head>
    <body></body>
  </html>
  `
</script>

<iframe title="Rendered Page" bind:this={iframe} {srcdoc} />


<style lang="scss">
  iframe {
    width: 100%;
    border: none;
  }
</style>