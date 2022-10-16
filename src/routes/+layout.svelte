<!-- +layout.svelte -->
<script>
import Header from '$lib/components/Header.svelte'
</script>

<Header />

<header><h1>Russellbits</h1></header>

<main>
  <slot />
</main>

<footer>Welcome to the footer. &copy; copyright stuff goes here.</footer>
