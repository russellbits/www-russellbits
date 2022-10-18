<script>
  export let data
  const { title, date, Article } = data
</script>

<article>
  <h1>{title}</h1>
  <p>Published: {date}</p>
  <Article />
</article>
