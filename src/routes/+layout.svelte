<!-- +layout.svelte -->
<script>
import Header from '$lib/components/Header.svelte'
import '$lib/styles/house.scss'
import '$lib/styles/entypo.scss'
</script>

<Header />

<div id="logo">RUSSELL<span class="secondary">BITS</span></div>

<main>
  <slot />
</main>

<footer>Welcome to the footer. &copy; copyright stuff goes here.</footer>
