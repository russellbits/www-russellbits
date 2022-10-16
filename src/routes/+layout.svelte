<!-- +layout.svelte -->
<script>
import Header from '$lib/components/Header.svelte'
import '$lib/styles/style.css'
</script>

<Header />

<header><h1>Russellbits</h1></header>

<main>
  <slot />
</main>

<footer>Welcome to the footer. &copy; copyright stuff goes here.</footer>
