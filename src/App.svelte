<script lang="ts">
  import HelloTest from "./lib/HelloTest.svelte";

  let message: string;
</script>

<main>
  <h1>{message}</h1>
  <HelloTest bind:message />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>
