<!-- Header.svelte -->

<ul id="socialbits">
	<li><a href="http://pinterest.com/belovedleader"><i class="glyph-pinterest glyph-white"></i></a></li>
	<li><a href="http://github.com/russellbits"><i class="glyph-github glyph-white"></i></a></li>
	<li><a href="http://instagram.com/belovedleader"><i class="glyph-instagram glyph-white"></i></a></li>
	<li><a href="http://twitter.com/belovedleader"><i class="glyph-twitter glyph-white"></i></a></li>
</ul>

<!--<header>
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
</header>-->

<style lang="scss">
header {
  padding: 1rem;
  background: rgb(147, 37, 189);
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
