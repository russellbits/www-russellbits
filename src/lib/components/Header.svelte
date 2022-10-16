<!-- Header.svelte -->
<header>
  <nav>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/blog">Blog</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
</header>

<!--
Once the preprocessor is installed and working, we can use SCSS anywhere with the following lang attribute
<style lang="scss">
// We can write SCSS here!
</style>
-->

<style>
header {
  padding: 1rem;
  background: lightskyblue;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

ul {
  margin: 0;
  list-style-type: none;
  display: flex;
  gap: 1rem;
}

a {
  text-decoration: none;
  font-weight: bold;
  color: white;
}
</style>
