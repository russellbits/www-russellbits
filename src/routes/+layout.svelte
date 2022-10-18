<!-- +layout.svelte -->
<script>
import Nav from '$lib/components/Nav.svelte'
import SocialLinks from '$lib/components/SocialLinks.svelte'
import Header from '$lib/components/Header.svelte'
import '$lib/styles/house.scss'
import '$lib/styles/entypo.scss'
</script>

<SocialLinks />

<Header />

<Nav />

<main>
  <slot />
</main>

<footer>Welcome to the footer. &copy; copyright stuff goes here.</footer>
